// frontend/script.js

const API_URL = 'https://organic-zebra-pj9vj79jwvj9h66r-5001.app.github.dev/games';


console.log("🚀 Gameloot script loaded");

function fetchGames() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('gameList');
            list.innerHTML = '';

            if (data.length === 0) {
                list.innerHTML = '<li>No games found.</li>';
                return;
            }

            data.forEach(game => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${game.title} (${game.platform}) - $${game.price}
                    <button onclick="editGame(${game.id}, '${game.title}', '${game.platform}', '${game.condition}', ${game.price})">Edit</button>
                    <button onclick="deleteGame(${game.id})">Delete</button>
                `;
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error loading games:', error);
        });
}


function addGame() {
    const title = document.getElementById('title').value;
    const platform = document.getElementById('platform').value;
    const condition = document.getElementById('condition').value;
    const price = parseFloat(document.getElementById('price').value);

    if (!title || !platform || !condition || isNaN(price)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, platform, condition, price })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('title').value = '';
            document.getElementById('platform').value = '';
            document.getElementById('condition').value = '';
            document.getElementById('price').value = '';
            fetchGames(); // Refresh list
        } else {
            alert('Failed to add game');
        }
    })
    .catch(error => {
        console.error('Error adding game:', error);
    });
}

function deleteGame(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(() => fetchGames())
    .catch(error => {
        console.error('Error deleting game:', error);
    });
}

window.onload = fetchGames;
