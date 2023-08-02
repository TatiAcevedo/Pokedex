
const initialState = {
  name: '',
  isTrainerNameSet: false, 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'SET_IS_TRAINER_NAME_SET':
      return {
        ...state,
        isTrainerNameSet: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
