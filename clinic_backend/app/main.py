from fastapi import FastAPI
from fastapi.security import HTTPBearer
from fastapi.openapi.utils import get_openapi

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

# Security scheme
bearer_scheme = HTTPBearer()

# Main app
app = FastAPI(
    title="Clinic API",
    description="API for clinic management system",
    version="1.0",
    swagger_ui_init_oauth=None
)

# ----------------------------
# CUSTOM OPENAPI (VERY IMPORTANT!)
# ----------------------------
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="Clinic API",
        version="1.0",
        description="Clinic management system",
        routes=app.routes,
    )

    # SECURITY SCHEME (This makes Swagger show a single "Value" field)
    openapi_schema["components"]["securitySchemes"] = {
        "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
        }
    }

    # Apply BearerAuth to all endpoints unless overridden
    openapi_schema["security"] = [{"BearerAuth": []}]

    app.openapi_schema = openapi_schema
    return app.openapi_schema

# Apply custom OpenAPI
app.openapi = custom_openapi

# Initialize database
create_db_and_tables()

# Include routers
app.include_router(auth_router.router, prefix="/auth")
# app.include_router(users_router.router, prefix="/users")
app.include_router(users_router.router)
app.include_router(doctors_router.router, prefix="/doctors")
app.include_router(availability_router.router, prefix="/availability")
app.include_router(appointments_router.router, prefix="/appointments")
app.include_router(notifications_router.router, prefix="/notifications")
app.include_router(admin_router.router, prefix="/admin")

@app.get("/")
def root():
    return {"status": "ok", "message": "Clinic Booking API is running!"}
