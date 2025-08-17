const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
let container = document.getElementById('main');

async function loadData() {
  loadPokemonData("/1/");
}

async function loadPokemonData(path='') {
  let response = await fetch(BASE_URL + path);
  let responseJson = await response.json();
  
  document.getElementById('numberOfPokemon').innerHTML = '#' + responseJson.id;
  document.getElementById('nameOfPokemon').innerHTML = responseJson.name.toUpperCase();
  document.getElementById('pic').src = responseJson.sprites.other.dream_world.front_default;
}

async function twentyOfEm(){
  for (let i = 0; i <= 20; i++) {
    const response = await fetch(BASE_URL + i);
    const data = await response.json();

    
  }
}