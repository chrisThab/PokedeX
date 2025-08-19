function toggleDialog(pokemon = null){
  const overlay = document.getElementById('bodyOverlay');
  const dialog = document.getElementById('detailView');

  overlay.classList.toggle('dialogVisible');
  dialog.classList.toggle('dialogVisible');

  if (pokemon) {
    dialog.innerHTML = buildDetailCard(pokemon);
  }
}


async function searchPokemon() {
  const input = document.getElementById('searchFor');
  const query = input.value.trim().toLowerCase();
  if (query < 3) {
    alert('At least 3 characters ...');
    return;
  }
  try {
    const response = await fetch(BASE_URL + query);
    if (!response.ok) throw new Error('Pokemon not found!');
    const found = await response.json();
    buildCard(found);
  }
  catch (error){
    alert('It seems, this is not a pokemon')
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
