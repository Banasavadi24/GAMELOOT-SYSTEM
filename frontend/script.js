const API_URL = 'https://organic-zebra-pj9vj79jwvj9h66r-5001.app.github.dev/games';


function fetchGames() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('gameList');
            list.innerHTML = '';
            data.forEach(game => {
                const li = document.createElement('li');
                li.innerHTML = `${game.title} (${game.platform}) - $${game.price}
                    <button onclick="deleteGame(${game.id})">Delete</button>`;
                list.appendChild(li);
            });
        });
}

function addGame() {
    const title = document.getElementById('title').value;
    const platform = document.getElementById('platform').value;
    const condition = document.getElementById('condition').value;
    const price = document.getElementById('price').value;

    fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title, platform, condition, price })
    }).then(() => fetchGames());
}

function deleteGame(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(() => fetchGames());
}

window.onload = fetchGames;
