# app/auth.py

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
from app.utils import decode_access_token
from app.database import engine
from sqlmodel import Session, select
from app.models import User

# OAuth2 scheme tells FastAPI where clients should send login credentials.
# tokenUrl="auth/login" means clients obtain tokens from this endpoint.
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")


def get_current_user(token: str = Depends(oauth2_scheme)):
    """
    Extracts and validates the currently logged-in user using the JWT access token.

    Steps:
    1. Read the bearer token from Authorization header.
    2. Decode the JWT using decode_access_token().
    3. Validate the payload (must contain user ID).
    4. Fetch the corresponding user from the database.
    5. Return the authenticated user object.

    Raises:
        HTTPException(401): Invalid token or missing payload.
        HTTPException(404): User does not exist in the database.
    """

    print("Received token: ", token)  # Useful for debugging authentication issues

    # Decode the token → returns payload or None if invalid/expired.
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid authentication credentials"
        )

    # Extract user ID from token payload
    user_id = payload.get("id")
    if user_id is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid token payload"
        )

    # Fetch the user from the database using the extracted user_id
    with Session(engine) as session:
        user = session.get(User, int(user_id))

        if not user:
            raise HTTPException(
                status_code=404,
                detail="User not found"
            )

        return user  # Authenticated user object


def require_role(role: str):
    """
    Dependency generator used to restrict access based on user role.

    Example:
        @router.get("/admin")
        def admin_dashboard(user = Depends(require_role("admin"))):
            return {"message": "Welcome, admin"}

    How it works:
    - Calls get_current_user() to get the authenticated user.
    - Checks if user's role matches the required role.
    - Raises 403 if the user is not allowed.
    """
    def inner(user: User = Depends(get_current_user)):
        # Compare required role with user's actual role
        if user.role != role:
            raise HTTPException(
                status_code=403,
                detail="Not authorized"
            )
        return user

    return inner
