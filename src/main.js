
var query = `
query getFacts {
  facts{
  	text,
    rating
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
    const factsElement = document.querySelector("#facts");
    const facts = data.data.facts;
    let html = '';
    
    facts.forEach(fact => {
      html += `
        <div class="card">${fact.text}</div>
      `
    });

    factsElement.innerHTML = html
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });