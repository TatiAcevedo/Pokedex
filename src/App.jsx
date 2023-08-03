
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import slices from './slices';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import Config from './components/Config';

function App() {
  return (
    <Provider slices={slices}>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/pokedex/:id" component={PokemonDetails} />
          <Route exact path="/config" component={Config} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
