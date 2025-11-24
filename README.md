# Clinic Appointment Booking System

## 📌 Overview

The **Clinic Appointment Booking System** is a web application that allows patients to book appointments online while providing administrators and doctors with tools to manage schedules, patient information, and appointment records.

This README includes:

* Complete project setup guide
* System architecture details
* API documentation
* Deployment instructions
* User manual

---

## 🛠️ 1. Codebase

### ✔️ Project Structure

* Clean, modular FastAPI backend
* Organized routers, models, schemas, and utilities
* SQLModel ORM for database handling
* JWT-based authentication
* Bcrypt password hashing

### ✔️ GitHub Collaboration

* Use branches for features
* Commit changes with meaningful messages
* Submit pull requests for review
* Track work using Issues and Milestones

### ✔️ Code Comments

All major functions, classes, and endpoints include comments explaining their purpose, parameters, and expected behaviour.

---

## 🧱 2. Technical Documentation

### ✔️ System Architecture

* **FastAPI Backend**
* **SQLModel + SQLite/PostgreSQL** (depending on environment)
* **JWT Auth**
* **REST API Endpoints**

### Architecture Diagram

```
Client → FastAPI Router → Controller → Database Session → SQLModel → Database
```

### ✔️ Technologies Used

* Python 3.12
* FastAPI
* SQLModel
* Uvicorn
* Passlib (bcrypt)
* Python-JOSE (JWT)
* Docker (optional deployment)

---

## 📡 API Documentation

### Authentication Routes

```
POST /auth/register
POST /auth/login
GET  /auth/me
```

### Sample Response (Token)

```json
{
  "access_token": "<jwt-token>",
  "token_type": "bearer"
}
```

### Appointment Routes

(Example — update depending on your actual routes)

```
POST /appointments/create
GET  /appointments
GET  /appointments/{id}
PUT  /appointments/{id}
DELETE /appointments/{id}
```

---

## 🧩 ERD (Entity Relationship Diagram)

```
User (1) —— (Many) Appointment —— (1) Doctor
```

---

## 🧪 Technical Challenges & Solutions

### ❗ Password hashing error (bcrypt 72-byte limit)

**Solution:** truncated passwords to 72 bytes and upgraded bcrypt library.

### ❗ JWT token decoding issues

**Solution:** standardized secret key, algorithm, and improved token validator.

### ❗ 401 Unauthorized on /me endpoint

**Solution:** Corrected dependency injection and ensured Authorization header required.

---

## 👩‍💻 3. User Manual

### ✔️ How to Register

1. Open `/docs` from the browser
2. Go to **POST /auth/register**
3. Enter your details
4. Receive JWT token

### ✔️ How to Login

1. Go to **POST /auth/login**
2. Enter email and password
3. Copy token

### ✔️ Access User Info (/me)

1. Click "Authorize" in Swagger
2. Enter: `Bearer <your-token>`
3. Call **GET /auth/me**

---

## 🖥️ 4. Project Setup Instructions

### ✔️ Install Dependencies

```bash
pip install -r requirements.txt
```

### ✔️ Run Server

```bash
uvicorn app.main:app --reload
```

### ✔️ Database Initialization

```python
from app.database import create_db_and_tables
create_db_and_tables()
```

---

## 🐳 5. Docker Deployment

### Build Image

```bash
docker build -t clinic-system .
```

### Run Container

```bash
docker run -p 8000:8000 clinic-system
```

---

## 📎 6. Contributor Guidelines

* Fork repository
* Create feature branch
* Commit changes
* Open PR

---

If you want, I can also generate:
✅ PPT slides
✅ System architecture diagram image
✅ API reference in a separate file
