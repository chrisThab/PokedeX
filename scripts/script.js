const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const FORMS_URL = "https://pokeapi.co/api/v2/pokemon-form/";

async function loadData() {
  loadPokemonData("/1/");
}

async function loadPokemonData(path='') {
  let response = await fetch(BASE_URL + path);
  let responseJson = await response.json();

  document.getElementById('numberOfPokemon').innerHTML = responseJson.id;
  document.getElementById('nameOfPokemon').innerHTML = responseJson.name;
  document.getElementById('pic').src = responseJson.sprites.other.dream_world.front_default;
}