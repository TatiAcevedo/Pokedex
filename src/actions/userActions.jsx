
export const setName = (name) => {
  return {
    type: 'SET_NAME',
    payload: name,
  };
};

export const setIsTrainerNameSet = (isSet) => {
  return {
    type: 'SET_IS_TRAINER_NAME_SET',
    payload: isSet,
  };
};

  