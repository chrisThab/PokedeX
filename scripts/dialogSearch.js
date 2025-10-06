function toggleDialog(pokemon){
  const overlay = document.getElementById('bodyOverlay');
  const dialog = document.getElementById('detailView');
  const background = document.querySelector('body');
  
  background.classList.toggle('stop');
  overlay.classList.toggle('dialogVisible');
  dialog.classList.toggle('dialogVisible');
  if(pokemon){
    detailCard(pokemon);
  }
}

// async function searchPokemon() {
//   const input = document.getElementById('searchFor');
//   const query = input.value.trim().toLowerCase();
//   input.addEventListener('pressEnter', function(event) {
//     if (event.key === 'Enter') {
//       document.getElementById('searchButton');}})
//   if (query < 3) {
//     alert('At least 3 characters ...');
//     return;}
//   try {
//     const response = await fetch(BASE_URL + query);
//     if (!response.ok) throw new Error('Pokemon not found!');
//     const found = await response.json();
//     buildCard(found);
//   } catch (error){
//     alert('It seems, this is not a pokemon')}
// }

async function searchPokemon() {
  const input = document.getElementById('searchFor');
  const query = input.value.trim().toLowerCase();
  if (query.length < 3) {
    alert('At least 3 characters ...');
    return;
  }
  try {
    const response = await fetch(`${BASE_URL}?limit=1000`);
    const data = await response.json();
    const allPokemon = data.results;
    const matches = allPokemon.filter(p => p.name.includes(query));
    if (matches.length === 0) {
      alert('No matching Pokémon found!');
      return;
    }
    container.innerHTML = '';
    for (const match of matches) {
      const res = await fetch(match.url);
      const pokemonData = await res.json();
      const card = document.createElement('div');
      card.className = `card borderStandard ${pokemonData.types[0].type.name}`;
      card.innerHTML = cardWrap(pokemonData, pokemonData.types);
      const img = card.querySelector('img');
      img.addEventListener('click', () => toggleDialog(pokemonData));
      container.appendChild(card);
    }
  } catch (error) {
    alert('Error fetching Pokémon data!');
    console.error(error);
  }
}

document.getElementById('searchButton').addEventListener('click', (event) => {
  event.preventDefault();
  searchPokemon();
});

document.getElementById('searchFor').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchPokemon();
  }
});