
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import PokedexFilter from './PokedexFilter';
import { Redirect } from 'react-router-dom'; 

const Pokedex = () => {
  const userName = useSelector((state) => state.user.name);
  const isTrainerNameSet = useSelector((state) => state.user.isTrainerNameSet); 

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      setPokemons(response.data.results);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  
  if (!isTrainerNameSet) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <h1>Welcome, {userName}!</h1>
      <PokedexFilter />
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
