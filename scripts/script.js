const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let container = document.getElementById('main');

async function loadData() {
  await twentyOfEm();
}

async function loadPokemonData(path='') {
  let response = await fetch(BASE_URL + path);
  let responseJson = await response.json();
  
  buildCard(responseJson);
}

async function twentyOfEm(){
  for (let i = 1; i <= 20; i++) {
    await loadPokemonData(i);
    };
  }

function buildCard(pokemon){
  const card = document.createElement('div');
  card.className= `card borderStandard ${pokemon.type}`;

  card.innerHTML = `
    <div class="nameNumber borderStandard">
      <p>#${pokemon.id}</p>
      <p>${pokemon.name.toUpperCase()}</p>
    </div>
    <div class="pokemonPicture">
      <img src="${pokemon.sprites.other.dream_world.front_default}" alt="picture of ${pokemon.name}">
    </div>
    <div class="pokemonDetails">
      <div class="borderStandard">abilities</div>
      <div class="borderStandard">stats</div>
      <div class="borderStandard">evolution</div>
    </div>
  `;
  const img = card.querySelector('img');
  img.addEventListener('click', () => toggleDialog(pokemon));

  container.appendChild(card);
}
