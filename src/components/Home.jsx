
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, setIsTrainerNameSet } from '../actions/userActions';
import PokedexFilter from './PokedexFilter';

const Home = () => {
  const dispatch = useDispatch();
  const [name, setNameState] = useState('');

  const handleNameChange = (event) => {
    setNameState(event.target.value);
  };

  const handleNameSubmit = () => {
    dispatch(setName(name));
    dispatch(setIsTrainerNameSet(true)); 
  };

  return (
    <div className="container">
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleNameSubmit}>Submit</button>
      <PokedexFilter />
    </div>
  );
};

export default Home;

