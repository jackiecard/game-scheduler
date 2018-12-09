
var query = `
query getGame {
  game(id: 1) {
    name,
    date,
    attendees {
      id,
      name
    }
  }
}`;

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    query
  })
})
  .then(r => r.json())
  .then(data => {
    const userList = document.querySelector("#user-list");
    const game = data.data.game;
    let html = `<h1>${game.name} - ${game.date}</h1>`;
    
    game.attendees.forEach(user => {
      html += `
        <div class="card">${user.name}</div>
      `
    });

    userList.innerHTML = html
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });