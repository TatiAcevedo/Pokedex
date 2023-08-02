import React, { useState } from 'react';

const PokedexFilter = () => {
  const [pokemonType, setPokemonType] = useState('');
  const [ability, setAbility] = useState('');
  const [move, setMove] = useState('');

  const handlePokemonTypeChange = (event) => {
    setPokemonType(event.target.value);
  };

  const handleAbilityChange = (event) => {
    setAbility(event.target.value);
  };

  const handleMoveChange = (event) => {
    setMove(event.target.value);
  };

  return (
    <div>
      <h2>Filter Pokémon:</h2>
      <div>
        <label htmlFor="pokemonType">Type:</label>
        <select id="pokemonType" value={pokemonType} onChange={handlePokemonTypeChange}>
          <option value="">All</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          {/* Add more options for other types */}
        </select>
      </div>
      <div>
        <label htmlFor="ability">Ability:</label>
        <input type="text" id="ability" value={ability} onChange={handleAbilityChange} />
      </div>
      <div>
        <label htmlFor="move">Move:</label>
        <input type="text" id="move" value={move} onChange={handleMoveChange} />
      </div>
    </div>
  );
};

export default PokedexFilter;
