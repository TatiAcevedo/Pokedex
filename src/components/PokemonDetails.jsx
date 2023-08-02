import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/PokemonDetails.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonDetails(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  return (
    <div className="container">
      {pokemonDetails ? (
        <div>
          <h1>{pokemonDetails.name}</h1>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />

          <h2>Type:</h2>
          <ul>
            {pokemonDetails.types.map((typeData) => (
              <li key={typeData.type.name}>{typeData.type.name}</li>
            ))}
          </ul>

          <h2>Abilities:</h2>
          <ul>
            {pokemonDetails.abilities.map((abilityData) => (
              <li key={abilityData.ability.name}>{abilityData.ability.name}</li>
            ))}
          </ul>

          <h2>Moves:</h2>
          <ul>
            {pokemonDetails.moves.map((moveData) => (
              <li key={moveData.move.name}>{moveData.move.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetails;
