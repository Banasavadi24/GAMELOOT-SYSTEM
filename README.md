**Gameloot System**


## Overview

Gameloot is a fictional retail company that specializes in buying, selling, and renting used video game CDs and consoles via both physical stores and an online platform. The aim of this project is to create a **proof-of-concept Information System** that allows Gameloot to manage its inventory efficiently through a modern web-based interface connected to a backend API.


## Justification for Organisation Choice

I picked Gameloot because it’s a simple, real-world kind of business that makes it easy to understand how things work behind the scenes. It shows how you can add, update, or delete stuff, keep track of what’s in stock, and manage rentals or sales. It’s a clear and practical way to learn how websites, data, and systems all  are connected and works together.



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

- User interaction with web interface
- Flat-file backend data storage in JSON
- Frontend API interaction with JavaScript
- REST API backend built with Python Flask
- Unit testing of the entire unit and one integration test


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


## REFERENCE 
innerHtml: https://www.youtube.com/watch?v=HcOc7P5BMi4

id:(${id})`) - The HTML id attribute is used to specify a unique id for an HTML element.

Basic knowlage about flask -  https://flask.palletsprojects.com/en/stable/_images/flask-name.svg 
Testcase--https://www.geeksforgeeks.org/python/unit-testing-python-unittest/

To connect data.json for backend ,To store and Retrieve the data, I reffered some of the blog from the the youtube given the links below;
https://www.youtube.com/watch?v=ycmci-hiPfQ

https://www.youtube.com/shorts/n-iQyqPWyxI
I added edit game function code by taking help from my friend and ChatGPT.
Here i too the example reference from chatgpt and changed my code accordingly to add edit game function.
https://chatgpt.com/c/687f7f75-2b58-800f-9fa3-0ea87060fadb

I added edit game function code by taking help from my friend and ChatGPT.
Here i too the example reference from chatgpt and changed my code accordingly to add edit game function.
https://chatgpt.com/c/687f7f75-2b58-800f-9fa3-0ea87060fadb

Here i used Cross origin request for all with the ChatGPT reference.
https://chatgpt.com/c/687f7f75-2b58-800f-9fa3-0ea87060fadb

Here i was not getting the list of games when i add game in the final output so i took chatgpt help to check the error with example and cleared the error. Used parsefloat to convert string to number.
https://chatgpt.com/c/687f7971-f2b0-800f-ad8d-0b9226f3edc1

Updated data.json by adding games to get in the list of games with the reference of youtube tutorial.
https://www.youtube.com/watch?v=iiADhChRriM

https://chatgpt.com/c/687f7971-f2b0-800f-ad8d-0b9226f3edc1
Here I used POST and GET games example to code for test integration of add and fetch games by using ChatGPT.


data.json is done by me with the reference of youtube tutorial - https://www.youtube.com/watch?v=iiADhChRriM
Mock data used to simulate small in memory database for API GET/POST ActionData

In the script.js file I added key functions of fetchGames( ), addGame ( ) and deleteGame ( ) where it connects the frontend interface with the backend flask using Fetch API and JSON by using chatgpt and friend help.

https://chatgpt.com/c/687f7971-f2b0-800f-ad8d-0b9226f3edc1
Here i coded fetchGame function and took code from chatGPT and re-edited to get a proper output.
