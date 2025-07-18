**Gameloot System**


## Overview

Gameloot is a fictional retail company that specializes in buying, selling, and renting used video game CDs and consoles via both physical stores and an online platform. The aim of this project is to create a **proof-of-concept Information System** that allows Gameloot to manage its inventory efficiently through a modern web-based interface connected to a backend API.


## Justification for Organisation Choice

I chose Gameloot because it is a simulation of a real-life business model that has simple yet fundamental needs of an information system. It offers an evident possibility to introduce basic CRUD functions, manage inventory, and facilitate further rental and sales options. This is why it is a perfect example of the use of backend logic, data persistence and web-based user interaction.


## System Features

###  CRUD Functionality

| Operation | Description                       |
| --------- | --------------------------------- |
| Create    | Add new video game entries        |
| Read      | List and retrieve existing games  |
| Update    | Modify game details *(API-ready)* |
| Edit      | Remove games from inventory       |

Each game entry includes:

* `Title` (text)
* `Platform` (text)
* `Condition` (New/Used)
* `Price` (number)
* `ID` (auto-generated)



## System Requirements

This system includes:

*User interaction with web interface
*Flat-file backend data storage in JSON
*Frontend API interaction with JavaScript
*REST API backend built with Python Flask
*Unit testing of the entire unit and one integration test


## System Architecture

| Layer    | Technology              | Role                                    |
| -------- | ----------------------- | --------------------------------------- |
| Frontend | HTML5, CSS, JavaScript  | User input and display                  |
| Backend  | Python (Flask)          | Handles API requests and responses      |
| Database | JSON File (`data.json`) | Lightweight, flat-file data storage     |
| Hosting  | GitHub Codespaces       | All development and testing environment |


## Status

1. All required features implemented
2. Unit + integration testing complete
3. GitHub public repository maintained
4. Attribution and documentation included


##REFERENCE 
innerHtml: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
id:(${id})`) - The HTML id attribute is used to specify a unique id for an HTML element.
Basic knowlage about flask -  https://flask.palletsprojects.com/en/stable/_images/flask-name.svg
 Testcase--https://www.geeksforgeeks.org/python/unit-testing-python-unittest/
 chatgpt,w3school,geeksforgeeks  
