
export const setPokemonPerPage = (perPage) => {
    return {
      type: 'SET_POKEMON_PER_PAGE',
      payload: perPage,
    };
  };
  
  export const toggleDarkMode = (isDarkMode) => {
    return {
      type: 'TOGGLE_DARK_MODE',
      payload: isDarkMode,
    };
  };
  