const API_URL = 'https://organic-zebra-pj9vj79jwvj9h66r-5001.app.github.dev/games';

function fetchGames() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('gameList');
            list.innerHTML = ''; // clear old list

            if (data.length === 0) {
                list.innerHTML = '<li>No games found.</li>';
                return;
            }

            data.forEach(game => {
                const li = document.createElement('li');
                li.innerHTML = `${game.title} (${game.platform}) - $${game.price} 
                    <button onclick="deleteGame(${game.id})">Delete</button>`;
                list.appendChild(li);
            });
        })
        .catch(err => {
            console.error('Failed to load games:', err);
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title, platform, condition, price })
    })
    .then(res => {
        if (res.ok) {
            // Clear input fields
            document.getElementById('title').value = '';
            document.getElementById('platform').value = '';
            document.getElementById('condition').value = '';
            document.getElementById('price').value = '';
            fetchGames(); // refresh list
        } else {
            alert('Failed to add game');
        }
    });
}

function deleteGame(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    }).then(() => fetchGames());
}

window.onload = fetchGames;
