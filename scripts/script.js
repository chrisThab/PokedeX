const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const TYPE_URL = "https://pokeapi.co/api/v2/type/";
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
  const typeClasses = pokemon.types.map(t => t.type.name).join(' ');
  const card = document.createElement('div');
  card.className= `card borderStandard ${typeClasses}`;
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

function buildDetail(bgColor, number, name, pictureOf){
return`
<div class="detailCard ${bgColor}">
    <div id='arrowWrapper' class="arrowWrapper borderStandard">
      <button id="left" class="borderStandard hover"><img src="./assets/icons/arrow_hand_left.png" alt=""></button>
      <button id="right" class="borderStandard hover"><img src="./assets/icons/arrow_hand_right.png" alt=""></button>
      <button id="close" class="borderStandard hover" onclick='toggleDialog()'><div>X</div></button>
    </div>
    <img class='backgroundOfDetail' src="./assets/img/pokeSign2.png" alt="pokemon logo">
    <div id="typePic" class="pictureWrapper">
      <div id='typesOf' class="types">
      </div>
      <div id="picture" class="pokemonPicture"><img src='${pictureOf}'></div>
    </div>
    <div id="nameNumberWrapper" class="nameNumberWrapper borderStandard">
      <p>#${number}</p>
      <p>${name}</p>
    </div>
    <div id="statistics" class="stats">
      <div class='column'>
      <strong class='hover borderRound white' onclick='switchStats'>STATS</strong>
      <div id="stats" class="column"></div></div>
      <div class='column'>
      <strong class='hover borderRound white' onclick='switchStats'>ABILITY</strong>
      <div id="abilities" class="column"></div></div>
      <div class='column'>
      <strong class='hover borderRound white' onclick='switchStats'>EVOLUTION</strong>
      <div id="evolution" class="column"></div></div>
    </div>
  </div>`
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


// function stats(pokemon) {
//   const statsContainer = document.getElementById('stats');
//   statsContainer.innerHTML = '';
//   pokemon.stats.forEach(stats => {
//     const statElement = document.createElement('p');
//     statElement.innerText = `${stats.stat.name}: ${stats.base_stat}`;
//     statsContainer.appendChild(statElement);
//   });
// }

// function abilities(pokemon){
//   const absContainer = document.getElementById('abilities');
//   absContainer.innerHTML = '';
//   pokemon.abilities.forEach(abilities => {
//     const absElement = document.createElement('p');
//     absElement.innerText = `${abilities.ability.name}`;
//     absContainer.appendChild(absElement);
//   })
// }
