# app/database.py

from sqlmodel import SQLModel, create_engine, Session

# ---------------------------------------------------------------------
# DATABASE CONFIGURATION
# ---------------------------------------------------------------------

# SQLite database connection URL.
# This is suitable for development. In production, replace this with:
# "postgresql://user:password@host:port/database"
DATABASE_URL = "sqlite:///./clinic.db"

# Create the database engine.
# - echo=False prevents SQL statements from printing in the terminal.
# - check_same_thread=False allows SQLite to be accessed across threads.
engine = create_engine(
    DATABASE_URL,
    echo=False,
    connect_args={"check_same_thread": False}
)

# ---------------------------------------------------------------------
# DATABASE INITIALIZATION
# ---------------------------------------------------------------------

def create_db_and_tables():
    """
    Create all database tables based on SQLModel metadata.
    This is typically called once when the application starts.
    """
    SQLModel.metadata.create_all(engine)

# ---------------------------------------------------------------------
# DATABASE SESSION DEPENDENCY
# ---------------------------------------------------------------------

def get_session():
    """
    Dependency used in routes to open a database session.
    
    FastAPI handles this generator-style function by:
    - opening the session at the start of a request,
    - providing it to the endpoint,
    - closing it automatically after the request finishes.
    """
    with Session(engine) as session:
        yield session
