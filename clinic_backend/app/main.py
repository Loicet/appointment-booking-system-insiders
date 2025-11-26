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

# ---------------------------------------------------------------------
# SECURITY SCHEME
# ---------------------------------------------------------------------
# Defines a global HTTP Bearer auth security scheme.
# This is mainly used so Swagger UI displays the "Authorize" button,
# allowing JWT tokens to be attached to authenticated requests.
bearer_scheme = HTTPBearer()

# ---------------------------------------------------------------------
# FASTAPI APPLICATION INSTANCE
# ---------------------------------------------------------------------
app = FastAPI(
    title="Clinic API",
    description="API for clinic management system",
    version="1.0",
    swagger_ui_init_oauth=None  # Prevents OAuth popup in Swagger UI
)

# ---------------------------------------------------------------------
# CUSTOM OPENAPI SCHEMA (IMPORTANT FOR JWT IN SWAGGER)
# ---------------------------------------------------------------------
def custom_openapi():
    """
    Overrides FastAPI's default OpenAPI generation to:
    - Add a Bearer token security scheme for JWT authentication.
    - Apply this scheme globally to all routes.
    - Ensure Swagger UI shows a single token input field.
    """
    if app.openapi_schema:
        return app.openapi_schema

    # Generate default OpenAPI schema
    openapi_schema = get_openapi(
        title="Clinic API",
        version="1.0",
        description="Clinic management system",
        routes=app.routes,
    )

    # Add BearerAuth security scheme for JWT
    openapi_schema["components"]["securitySchemes"] = {
        "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
        }
    }

    # Apply BearerAuth to all endpoints globally
    openapi_schema["security"] = [{"BearerAuth": []}]

    app.openapi_schema = openapi_schema
    return app.openapi_schema

# Apply the custom OpenAPI configuration to the app
app.openapi = custom_openapi

# ---------------------------------------------------------------------
# DATABASE INITIALIZATION
# ---------------------------------------------------------------------
# Creates all database tables when the app starts.
# Only runs once per startup.
create_db_and_tables()

# ---------------------------------------------------------------------
# ROUTER REGISTRATION
# ---------------------------------------------------------------------
# Attach individual feature modules to the main application.
# Each router handles a specific part of the system.
app.include_router(auth_router.router, prefix="/auth")
app.include_router(users_router.router)  # No prefix, already defined in router
app.include_router(doctors_router.router, prefix="/doctors")
app.include_router(availability_router.router, prefix="/availability")
app.include_router(appointments_router.router, prefix="/appointments")
app.include_router(notifications_router.router, prefix="/notifications")
app.include_router(admin_router.router, prefix="/admin")

# ---------------------------------------------------------------------
# ROOT ENDPOINT
# ---------------------------------------------------------------------
@app.get("/")
def root():
    """
    Basic health check endpoint to confirm the API is running.
    """
    return {"status": "ok", "message": "Clinic Booking API is running!"}
