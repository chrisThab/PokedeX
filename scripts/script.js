const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const TYPE_URL = "https://pokeapi.co/api/v2/type/";
let container = document.getElementById('main');

async function loadData() {
  await twentyOfEm();
}
btnForNext();

async function twentyOfEm(){
  for (let i = 1; i <= 20; i++) {
    await loadPokemonData(i);
    };
}

async function loadPokemonData(path='') {
  let response = await fetch(BASE_URL + path);
  let responseJson = await response.json();
  
  buildCard(responseJson);
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
  })
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

function btnForNext (){
  const btnNext20 = document.getElementById('main');
  btnNext20.innerHTML = `<div class='btnForNext borderRound font'>Get the next 20 Pokemon</div>`
}