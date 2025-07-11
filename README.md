# GAMELOOT-SYSTEM
# Gameloot - Game Inventory Information System

## 🔍 Overview

**Gameloot** is a fictional company specializing in buying, selling, and now **renting** used video game CDs and consoles. This project is a **proof-of-concept Information System** designed to help Gameloot track and manage game inventory using a modern web-based interface.

This system supports:
- Buying/Selling tracking
- Game inventory management
- Renting system extension ready

---

## 🧠 Why Gameloot?

I selected Gameloot as it reflects a real-world business that deals with second-hand entertainment products. This project solves a real business need: **centralizing and simplifying inventory control** using a lightweight and portable app.

---

## 🏗️ System Features

### ✅ CRUD Functionalities Implemented:
- `Create`: Add new games to inventory
- `Read`: View all games
- `Update`: Modify game details *(future extension)*
- `Delete`: Remove games from list

### ✅ Data Stored:
- `title` (string)
- `platform` (string)
- `condition` (New/Used)
- `price` (float)
- `id` (auto-generated)

### ✅ Architecture
| Layer       | Technology         | Description                        |
|-------------|--------------------|------------------------------------|
| Frontend    | HTML + JS          | User input and game list display   |
| Backend     | Python Flask       | REST API with CORS enabled         |
| Data Store  | JSON File (`data.json`) | Simulated NoSQL flat database |
| Hosting     | GitHub Codespaces  | Dev environment + deployment       |

---

## ⚙️ Setup & Run

### ✅ 1. Install & Run Backend

```bash
python3 -m venv venv
source venv/bin/activate
pip install flask flask-cors
flask --app backend/app.py --debug run --host=0.0.0.0 --port=5001
