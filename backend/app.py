# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://organic-zebra-pj9vj79jwvj9h66r-5500.app.github.dev"}})

@app.route('/')
def home():
    return "✅ Flask API is running. Try /games to see game data."

DATA_FILE = 'backend/data.json'

def load_data():
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'w') as f:
            json.dump([], f)
    with open(DATA_FILE) as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=4)

@app.route('/games', methods=['GET'])
def get_games():
    return jsonify(load_data())

@app.route('/games', methods=['POST'])
def add_game():
    data = load_data()
    new_game = request.json
    new_game['id'] = len(data) + 1
    data.append(new_game)
    save_data(data)
    return jsonify(new_game), 201

@app.route('/games/<int:game_id>', methods=['PUT'])
def update_game(game_id):
    data = load_data()
    for game in data:
        if game['id'] == game_id:
            game.update(request.json)
            save_data(data)
            return jsonify(game)
    return jsonify({'error': 'Game not found'}), 404

@app.route('/games/<int:game_id>', methods=['DELETE'])
def delete_game(game_id):
    data = load_data()
    updated_data = [game for game in data if game['id'] != game_id]
    save_data(updated_data)
    return jsonify({'message': 'Deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
