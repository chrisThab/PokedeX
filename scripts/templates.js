function cardWrap(pokemon, types){
  const typeHTML = types.map(t => `<div class="borderStandard ${t.type.name}">${t.type.name}</div>`).join('');
  return `
    <div class="nameNumber borderStandard">
      <p>#${pokemon.id}</p>
      <p>${pokemon.name.toUpperCase()}</p>
    </div>
    <div class="pokemonPicture">
      <img class='hover' src="${pokemon.sprites.other.dream_world.front_default}" alt="picture of ${pokemon.name}">
    </div>
    <div class="pokemonDetails">
      ${typeHTML}
    </div>`;
}

function buildDetail(bgColor, number, name, pictureOf){
return`
<div class="detailCard ${bgColor}">
    <div id='arrowWrapper' class="arrowWrapper borderStandard">
      <button id="left" class="borderArrow hover"><img src="./assets/icons/arrow_hand_left.png" alt=""></button>
      <button id="right" class="borderArrow hover"><img src="./assets/icons/arrow_hand_right.png" alt=""></button>
      <button id="close" class="borderArrow hover" onclick='toggleDialog()'><div>X</div></button>
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
