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
    const bgColor = pokemon.types[0].type.name;

  const card = document.createElement('div');
  const typeClasses = pokemon.types.map(t => t.type.name).join(' ');
  card.className= `card borderStandard ${bgColor}`;
  card.innerHTML = cardWrap(pokemon, typeClasses);
  const img = card.querySelector('img');
  img.addEventListener('click', () => toggleDialog(pokemon));

  container.appendChild(card);
}

function details(pokemon){
  const bgColor = pokemon.types[0].type.name;
  const detailCard = document.getElementById('detailView');
  const types = pokemon.types.map(t => t.type.name);
  const number = pokemon.id;
  const name = pokemon.name;
  if (detailView.className === 'dialogVisible'){
    detailCard.innerHTML = buildDetail(pokemon, types, bgColor, number, name);
  }
  
}

function buildDetail(pokemon, types, bgColor, number, name){
return`
<div id="detailCard" class="detailCard">
    <div id='arrowWrapper' class="arrowWrapper borderStandard">
      <button id="left" class="borderStandard"><img src="./assets/icons/arrow_hand_left.png" alt=""></button>
      <button id="right" class="borderStandard"><img src="./assets/icons/arrow_hand_right.png" alt=""></button>
      <button id="close" class="borderStandard"><div>X</div></button>
    </div>
    <div id="typePic" class="pictureWrapper">
      <div class="types">
        <p id="type1"></p>
        <p id="type2"></p>
      </div>
      <div id="picture" class="pokemonPicture"></div>
    </div>
    <div id="nameNumberWrapper" class="nameNumberWrapper, borderStandard">
      <p id="number"></p>
      <p id="name"></p>
    </div>
    <div id="statistics" class="stats">
      <div id="stats" class="column"><strong>STATS</strong></div>
      <div id="abilities" class="column"><strong>ABILITY</strong></div>
      <div id="evolution" class="column"><strong>EVOLUTION</strong></div>
    </div>
  </div>`
}
