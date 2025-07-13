**Gameloot System**


## Overview

Gameloot is a fictional retail company that specializes in buying, selling, and renting used video game CDs and consoles via both physical stores and an online platform. The aim of this project is to create a **proof-of-concept Information System** that allows Gameloot to manage its inventory efficiently through a modern web-based interface connected to a backend API.


## Justification for Organisation Choice

I selected Gameloot as it simulates a real-world business model with simple but essential requirements for an information system. It provides a clear opportunity to implement core CRUD functionalities, handle inventory, and support future rental and sales features. This makes it an ideal case for applying backend logic, data persistence, and web-based user interaction.


## System Features

###  CRUD Functionality

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



## System Requirements

This system includes:

* Web interface for user interaction
* JSON-based flat-file backend data storage
* JavaScript-based frontend API interaction
* Python Flask-based REST API backend
* Full unit testing and one integration test



## System Architecture

| Layer    | Technology              | Role                                    |
| -------- | ----------------------- | --------------------------------------- |
| Frontend | HTML5, CSS, JavaScript  | User input and display                  |
| Backend  | Python (Flask)          | Handles API requests and responses      |
| Database | JSON File (`data.json`) | Lightweight, flat-file data storage     |
| Hosting  | GitHub Codespaces       | All development and testing environment |


## Folder Structure


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


## Status

✅ All required features implemented
✅ Unit + integration testing complete
✅ GitHub public repository maintained
✅ Attribution and documentation included
