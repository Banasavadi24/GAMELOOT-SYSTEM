# 🎮 Gameloot - Game Inventory Information System

---

## 📌 Project Overview

**Gameloot** is a fictional business that buys, sells, and rents used video game CDs and consoles through both online and physical stores.

This project is a **proof-of-concept information system** designed to manage Gameloot's inventory of games and consoles using a modern web interface and backend API. The focus is on building a system that implements **CRUD operations** and demonstrates frontend-backend interaction.

---

## 🏢 Why Gameloot?

Gameloot represents a real-world use case where small to medium retail businesses need simple, effective tools for inventory tracking. It is ideal for this assignment due to:

- Clear CRUD requirements
- Realistic business logic (buy/sell/rent)
- Potential for feature growth

---

## 🧠 System Requirements

### ✅ Core Features Implemented:
- **Create** – Add new games to inventory
- **Read** – View all game records
- **Update** – Modify existing game info (API-ready)
- **Delete** – Remove a game

### ✅ Game Data Structure:
Each game object includes:
```json
{
  "id": 1,
  "title": "Halo",
  "platform": "Xbox",
  "condition": "Used",
  "price": 10.0
}
