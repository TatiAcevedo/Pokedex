import React from 'react';
import '../styles/PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  return (
    
   
<div className="card">
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
