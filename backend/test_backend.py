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
    

    def test_integration_add_and_fetch_game(self):
       
        new_game = {
            "title": "FIFA 23",
            "platform": "PS5",
            "condition": "New",
            "price": 59.99
        }
        post_response = self.client.post('/games', json=new_game)
        self.assertEqual(post_response.status_code, 201)

        
        get_response = self.client.get('/games')
        self.assertEqual(get_response.status_code, 200)
        games = get_response.get_json()
        self.assertTrue(any(game["title"] == "FIFA 23" for game in games))

if __name__ == '__main__':
    unittest.main()
