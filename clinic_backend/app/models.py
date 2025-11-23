# app/models.py
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
import datetime

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    password_hash: str
    role: str = Field(default="patient")  # patient, doctor, admin

    appointments: List["Appointment"] = Relationship(back_populates="patient")


class Clinic(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    address: Optional[str] = None
    doctors: List["Doctor"] = Relationship(back_populates="clinic")


class Doctor(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    specialty: Optional[str] = None
    clinic_id: Optional[int] = Field(default=None, foreign_key="clinic.id")
    clinic: Optional[Clinic] = Relationship(back_populates="doctors")
    availabilities: List["Availability"] = Relationship(back_populates="doctor")
    appointments: List["Appointment"] = Relationship(back_populates="doctor")


class Availability(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    doctor_id: int = Field(foreign_key="doctor.id")
    date: datetime.date
    start_time: datetime.time
    end_time: datetime.time

    doctor: Optional[Doctor] = Relationship(back_populates="availabilities")


class Appointment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    patient_id: int = Field(foreign_key="user.id")
    doctor_id: int = Field(foreign_key="doctor.id")
    date: datetime.date
    time: datetime.time
    status: str = Field(default="booked")  # booked, cancelled, completed
    created_at: datetime.datetime = Field(default_factory=datetime.datetime.utcnow)

    patient: Optional[User] = Relationship(back_populates="appointments")
    doctor: Optional[Doctor] = Relationship(back_populates="appointments")


class Notification(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    appointment_id: Optional[int] = Field(default=None, foreign_key="appointment.id")
    message: str
    sent: bool = Field(default=False)
    created_at: datetime.datetime = Field(default_factory=datetime.datetime.utcnow)

