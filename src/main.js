fetch("https://cat-fact.herokuapp.com/facts")
  .then(res => res.json())
  .then(data => {
    const facts = document.querySelector("#facts");
    let html = '';
    data.all.forEach(fact => {
      html += `
        <div class="card">${fact.text}</div>
      `
    });
    facts.innerHTML = html
  })
  .catch(function(error) {
    console.log("Request failed", error);
  });