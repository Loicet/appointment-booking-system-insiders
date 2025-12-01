# app/routers/notifications_router.py

from fastapi import APIRouter, BackgroundTasks
from app.utils import send_email_stub
from app.database import engine
from sqlmodel import Session, select
from app.models import Notification, Appointment, User

# Router for all notification-related endpoints
router = APIRouter(prefix="/notifications", tags=["notifications"])


# ---------------------------------------------------------------------
# SEND NOTIFICATION (ASYNC VIA BACKGROUND TASK)
# ---------------------------------------------------------------------
@router.post("/send")
def send_notification(email: str, subject: str, message: str, background_tasks: BackgroundTasks):
    """
    Sends a notification email using FastAPI BackgroundTasks.
    
    This does NOT send the email immediately—it schedules it to run
    asynchronously after the API response is returned, which avoids blocking.

    Args:
        email (str): Recipient email address
        subject (str): Email subject text
        message (str): Body content of the email
        background_tasks (BackgroundTasks): FastAPI task scheduler

    Returns:
        dict: Status message confirming that the task was queued
    """
    
    # Schedules an email to be sent in the background
    background_tasks.add_task(send_email_stub, email, subject, message)

    return {"status": "scheduled"}


# ---------------------------------------------------------------------
# DISPATCH PENDING NOTIFICATIONS
# ---------------------------------------------------------------------
@router.post("/dispatch_pending")
def dispatch_pending():
    """
    Sends all notifications that are marked as 'pending' in the database.

    This simulates how a real system would send queued notifications.
    For each pending notification:
        - Finds the related appointment
        - Retrieves the associated user (patient)
        - Sends an email
        - Marks the notification as 'sent'

    Returns:
        dict: Count of notifications that were processed
    """

    with Session(engine) as session:

        # Fetch notifications that have not yet been sent
        pending = session.exec(
            select(Notification).where(Notification.sent == False)
        ).all()

        # Loop through each pending notification
        for n in pending:

            # Check if notification is linked to an appointment
            if n.appointment_id:
                appt = session.get(Appointment, n.appointment_id)

                # If appointment exists, find the user who booked it
                if appt:
                    user = session.get(User, appt.patient_id)

                    # If user exists, send email
                    if user:
                        send_email_stub(
                            user.email,
                            "Notification",
                            n.message
                        )

            # Mark notification as sent
            n.sent = True
            session.add(n)

        # Commit the updated records to the database
        session.commit()

    return {"sent": len(pending)}
