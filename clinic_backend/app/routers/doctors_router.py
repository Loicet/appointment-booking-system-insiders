# app/routers/doctors_router.py

from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select
from app.database import engine
from app.models import Doctor, Clinic
from app.schemas import DoctorOut
from typing import List
from app.auth import require_role, get_current_user

# Router for all doctor-related endpoints
router = APIRouter(prefix="/doctors", tags=["doctors"])


# ---------------------------------------------------------------------
# CREATE DOCTOR (ADMIN ONLY)
# ---------------------------------------------------------------------
@router.post("/", response_model=DoctorOut)
def create_doctor(payload: Doctor, admin=Depends(require_role("admin"))):
    """
    Creates a new doctor record in the system.

    Only users with the "admin" role are allowed to access this endpoint.

    Args:
        payload (Doctor): The doctor data sent from the client (name, specialty, clinic_id, etc.)
        admin: Ensures the endpoint is only accessible by admins via dependency injection.

    Returns:
        DoctorOut: A clean representation of the doctor, including clinic name.
    """

    with Session(engine) as session:
        # Add and save doctor to the database
        session.add(payload)
        session.commit()
        session.refresh(payload)

        # Format response with clinic name for readability
        return {
            "id": payload.id,
            "name": payload.name,
            "specialty": payload.specialty,
            "clinic": payload.clinic.name if payload.clinic else None,
        }


# ---------------------------------------------------------------------
# LIST ALL DOCTORS (PUBLIC)
# ---------------------------------------------------------------------
@router.get("/", response_model=List[DoctorOut])
def list_doctors():
    """
    Retrieves a list of all doctors in the system.

    This endpoint is public (does not require login).

    For each doctor:
        - Fetches doctor details
        - If the doctor belongs to a clinic, retrieves the clinic name

    Returns:
        List[DoctorOut]: A list of doctors with their clinic names.
    """

    with Session(engine) as session:
        # Query all doctors
        docs = session.exec(select(Doctor)).all()

        formatted = []

        # Build output with clinic name included
        for d in docs:
            clinic_name = None

            # If doctor has an associated clinic, retrieve its name
            if d.clinic_id:
                clinic = session.get(Clinic, d.clinic_id)
                clinic_name = clinic.name if clinic else None

            formatted.append({
                "id": d.id,
                "name": d.name,
                "specialty": d.specialty,
                "clinic": clinic_name,
            })

        return formatted
