import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPokemonPerPage, toggleDarkMode } from '../actions/configActions';

const Config = () => {
  const pokemonPerPageOptions = [4, 8, 12, 16, 20];
  const dispatch = useDispatch();
  const configState = useSelector((state) => state.config);
  const { pokemonPerPage, darkMode } = configState;

  const handlePokemonPerPageChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    dispatch(setPokemonPerPage(selectedValue));
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode(!darkMode));
  };

  return (
    <div className="container">
      <h1>Configuration</h1>
      <div>
        <label htmlFor="pokemonPerPage">Number of Pokemon per page:</label>
        <select id="pokemonPerPage" value={pokemonPerPage} onChange={handlePokemonPerPageChange}>
          {pokemonPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="darkMode">Dark Mode:</label>
        <input type="checkbox" id="darkMode" checked={darkMode} onChange={handleDarkModeToggle} />
      </div>
    </div>
  );
};

export default Config;
