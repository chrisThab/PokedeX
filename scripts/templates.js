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

// function detailCard(pokemon){
//   const card = document.getElementById('detailView');
//   const bgColor = pokemon.types[0].type.name;
//   const typeClasses = pokemon.types.map(t => t.type.name).join(' ');
//   card.className= `card borderStandard ${bgColor}`;
//   card.innerHTML = buildDetailCard(pokemon, bgColor, typeClasses);
// }

// function buildDetailCard(pokemon, bgColor, typeClasses) {
//   return `
    
//   <div id='buttonWrapper'><button id='left'><img src='./assets/icons/arrow_hand_left.png' /></button>
//     <button id='right'><img src='./assets/icons/arrow_hand_right.png' /></button>
//     <a href="#" role="button" class="closeDialog"><i>X</i></a>
//   </div>
//   <div class="card borderStandard cardDetail ${bgColor}">
//     <div class="nameNumber borderStandard">
//       <p>#${pokemon.id}</p>
//       <p>${pokemon.name.toUpperCase()}</p>
//     </div>
//     <div class="pokemonPicture">
//       <img src="${pokemon.sprites.other.dream_world.front_default}" alt="picture of ${pokemon.name}">
//     </div>
//     <div class="pokemonDetails">
//       <div class="borderStandard">Abilities: ${pokemon.abilities.map(a => a.ability.name).join(', ')}</div>
//       <div class="borderStandard">Stats: ${pokemon.stats.map(s => s.stat.name + ': ' + s.base_stat).join(', ')}</div>
//     </div>
//   </div>

//   `;
// }