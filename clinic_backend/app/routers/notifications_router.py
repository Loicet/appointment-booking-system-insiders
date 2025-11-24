# app/routers/notifications_router.py
from fastapi import APIRouter, BackgroundTasks
from app.utils import send_email_stub
from app.database import engine
from sqlmodel import Session, select
from app.models import Notification, Appointment, User

router = APIRouter(prefix="/notifications", tags=["notifications"])

@router.post("/send")
def send_notification(email: str, subject: str, message: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email_stub, email, subject, message)
    return {"status": "scheduled"}

# simple admin endpoint to dispatch pending notifications (for demo)
@router.post("/dispatch_pending")
def dispatch_pending():
    with Session(engine) as session:
        pending = session.exec(select(Notification).where(Notification.sent == False)).all()
        for n in pending:
            # naive: get appointment -> user -> send email
            if n.appointment_id:
                appt = session.get(Appointment, n.appointment_id)
                if appt:
                    user = session.get(User, appt.patient_id)
                    if user:
                        send_email_stub(user.email, "Notification", n.message)
            n.sent = True
            session.add(n)
        session.commit()
    return {"sent": len(pending)}

