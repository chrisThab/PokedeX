const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const TYPE_URL = "https://pokeapi.co/api/v2/type/";
let container = document.getElementById('main');
let loadedPokemon = [];


async function twentyOfEm(){
  for (let i = 1; i <= 20; i++) {
    await loadPokemonData(i);
    };
}

async function loadData() {
  await twentyOfEm();
  renderNextButtonCard();
}

async function loadPokemonData(path='') {
  let response = await fetch(BASE_URL + path);
  let responseJson = await response.json();
  
  buildCard(responseJson);
  loadedPokemon = response.json;
}

function buildCard(pokemon){
  const bgColor = pokemon.types[0].type.name;
  const card = document.createElement('div');
  card.className= `card borderStandard ${bgColor}`;
  card.innerHTML = cardWrap(pokemon, pokemon.types);
  const img = card.querySelector('img');
  img.addEventListener('click', () => toggleDialog(pokemon), detailCard(pokemon));
  container.appendChild(card);
}

function detailCard(pokemon){
  let detailCard = document.getElementById('detailView');
  const bgColor = pokemon.types[0].type.name;
  const number = pokemon.id;
  const name = pokemon.name.toUpperCase();
  const pictureOf = pokemon.sprites.other.dream_world.front_default;
  detailCard.innerHTML = buildDetail(bgColor, number, name, pictureOf);
  renderData(pokemon, 'stats', 'stats', item=>`${item.stat.name}: ${item.stat_base}`);
  renderData(pokemon, 'abilities', 'abilities', item=> `${item.ability.name}`);
  typeOf(pokemon, bgColor);
  }

function renderData(pokemon, key, containerID, data){
  const container = document.getElementById(containerID);
  container.innerHTML = '';
  pokemon[key].forEach(item => {
    const element = document.createElement('p');
    element.innerText = data(item);
    container.appendChild(element);
  });
}

function typeOf(pokemon){
  const typeContainer = document.getElementById('typesOf');
  typeContainer.innerHTML = '';
  pokemon.types.forEach(type => {
    const typeElement = document.createElement('p');
    typeElement.classList.add('borderRound', type.type.name);
    typeElement.textContent = type.type.name;
    typeContainer.appendChild(typeElement);
  });
}

function renderNextButtonCard() {
  const card = document.createElement('div');
  card.className = 'card borderStandard nextButtonCard';
  card.innerHTML = `
    <div class="nameNumber borderStandard">
      <p>→</p>
      <p>Get next 20 Pokémon</p>
    </div>
    <div class="pokemonPicture">
      <img class='hover' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Next Pokémon">
    </div>
  `;
  card.addEventListener('click', loadNext20);
  container.appendChild(card);
}

let currentOffset = 1;

async function loadNext20() {
  // Entferne den alten Button
  const oldButton = document.querySelector('.nextButtonCard');
  if (oldButton) oldButton.remove();

  for (let i = currentOffset + 20; i < currentOffset + 40; i++) {
    await loadPokemonData(i);
  }
  currentOffset += 20;
  renderNextButtonCard();
}
