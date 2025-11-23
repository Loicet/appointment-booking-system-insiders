from fastapi import FastAPI
from app.database import create_db_and_tables
from app.routers import (
    auth_router,
    users_router,
    doctors_router,
    availability_router,
    appointments_router,
    notifications_router,
    admin_router
)

app = FastAPI(title="Clinic Booking API")

# initialize database
create_db_and_tables()

# include routers
app.include_router(auth_router.router, prefix="/auth")
app.include_router(users_router.router, prefix="/users")
app.include_router(doctors_router.router, prefix="/doctors")
app.include_router(availability_router.router, prefix="/availability")
app.include_router(appointments_router.router, prefix="/appointments")
app.include_router(notifications_router.router, prefix="/notifications")
app.include_router(admin_router.router, prefix="/admin")

@app.get("/")
def root():
    return {"status": "ok", "message": "Clinic Booking API is running!"}
