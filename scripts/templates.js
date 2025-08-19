function buildDetailCard(pokemon) {
  return `
    <div class="card borderStandard">
      <div class="nameNumber borderStandard">
        <p>#${pokemon.id}</p>
        <p>${pokemon.name.toUpperCase()}</p>
      </div>
      <div class="pokemonPicture">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="picture of ${pokemon.name}">
      </div>
      <div class="pokemonDetails">
        <div class="borderStandard">Abilities: ${pokemon.abilities.map(a => a.ability.name).join(', ')}</div>
        <div class="borderStandard">Stats: ${pokemon.stats.map(s => s.stat.name + ': ' + s.base_stat).join(', ')}</div>
      </div>
    </div>
  `;
}
