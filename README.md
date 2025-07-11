### 📄 Gameloot Information System

**Individual Project**
**Student Name:** *\[Your Name]*
**Course:** *\[Your Course Name]*
**Instructor:** *\[Your Professor's Name]*

---

## 🔷 Project Title

**Gameloot – Inventory Information System**

---

## 🔷 Overview

Gameloot is a fictional retail company that specializes in buying, selling, and renting used video game CDs and consoles via both physical stores and an online platform. The aim of this project is to create a **proof-of-concept Information System** that allows Gameloot to manage its inventory efficiently through a modern web-based interface connected to a backend API.

---

## 🔷 Justification for Organisation Choice

I selected Gameloot as it simulates a real-world business model with simple but essential requirements for an information system. It provides a clear opportunity to implement core CRUD functionalities, handle inventory, and support future rental and sales features. This makes it an ideal case for applying backend logic, data persistence, and web-based user interaction.

---

## 🔷 System Features

### ✔️ CRUD Functionality

| Operation | Description                       |
| --------- | --------------------------------- |
| Create    | Add new video game entries        |
| Read      | List and retrieve existing games  |
| Update    | Modify game details *(API-ready)* |
| Delete    | Remove games from inventory       |

Each game entry includes:

* `Title` (text)
* `Platform` (text)
* `Condition` (New/Used)
* `Price` (number)
* `ID` (auto-generated)

---

## 🔷 System Requirements

This system includes:

* Web interface for user interaction
* JSON-based flat-file backend data storage
* JavaScript-based frontend API interaction
* Python Flask-based REST API backend
* Full unit testing and one integration test



## 🔷 System Architecture

| Layer    | Technology              | Role                                    |
| -------- | ----------------------- | --------------------------------------- |
| Frontend | HTML5, CSS, JavaScript  | User input and display                  |
| Backend  | Python (Flask)          | Handles API requests and responses      |
| Database | JSON File (`data.json`) | Lightweight, flat-file data storage     |
| Hosting  | GitHub Codespaces       | All development and testing environment |

---

## 🔷 Setup Instructions

### Backend:

1. Create virtual environment:

   ```
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install packages:

   ```
   pip install flask flask-cors
   pip freeze > requirements.txt
   ```
3. Start the backend server:

   ```
   flask --app backend/app.py --debug run --host=0.0.0.0 --port=5001
   ```

### Frontend:

1. Navigate to frontend folder:

   ```
   cd frontend
   python3 -m http.server 5500
   ```
2. Visit in browser:

   * Frontend: `https://...5500.app.github.dev`
   * Backend: `https://...5001.app.github.dev/games`

---

## 🔷 Testing

### ✔️ Unit Testing

`backend/test_backend.py` contains:

* `test_create_game()`
* `test_get_games()`

Run tests with:

```bash
python3 -m unittest backend/test_backend.py
```

### ✔️ Integration Test

* Add a game through the UI
* Confirm it's visible in the list
* Confirm `/games` API returns it

---

## 🔷 Git & Commit Strategy

All development was done in [GitHub Codespaces](https://github.com/features/codespaces) and version-controlled via Git.

* Regular commits made during development
* All AI/code assistance committed separately
* Project remains fully traceable per academic integrity policy

---

## 🔷 Attribution

**External Libraries:**

* Flask: [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
* Flask-CORS: [https://flask-cors.readthedocs.io/](https://flask-cors.readthedocs.io/)

**Documentation & Support:**

* MDN Web Docs (JavaScript)
* Stack Overflow (specific error resolution)
* OpenAI ChatGPT (code structure, CORS, testing help)

All support is properly acknowledged and complies with the course Academic Integrity Policy.

---

## 🔷 Folder Structure

```
Gameloot/
│
├── backend/
│   ├── app.py
│   ├── data.json
│   └── test_backend.py
│
├── frontend/
│   ├── index.html
│   └── script.js
│
├── requirements.txt
└── README.md
```

---

## 🔷 Future Improvements

* Implement rental tracking (start & return dates)
* Search, filter, and sort functionality
* Switch to SQLite or MongoDB for persistent storage
* User authentication (admin, staff logins)

---

## 🔷 Status

✅ All required features implemented
✅ Unit + integration testing complete
✅ GitHub public repository maintained
✅ Attribution and documentation included

---

> **End of Document**
> *(Include your GitHub repository link at the top when submitting)*

---

### ✅ To Submit:

* Save this in Word Online (M365)
* Share the **editable link** with your professor
* Push all your code to your public GitHub repository

Let me know if you want me to generate the `.docx` file for you — I can do that too!
