# backend/test_backend.py
import unittest
import json
from app import app

class GameTests(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.test_game = {
            "title": "Halo",
            "platform": "Xbox",
            "condition": "Used",
            "price": 10.0
        }

    def test_create_game(self):
        response = self.client.post('/games', json=self.test_game)
        self.assertEqual(response.status_code, 201)

    def test_get_games(self):
        response = self.client.get('/games')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
