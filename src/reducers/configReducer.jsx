
const initialState = {
    pokemonPerPage: 8, 
    darkMode: false, 
  };
  
  const configReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POKEMON_PER_PAGE':
        return {
          ...state,
          pokemonPerPage: action.payload,
        };
      case 'TOGGLE_DARK_MODE':
        return {
          ...state,
          darkMode: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default configReducer;
  