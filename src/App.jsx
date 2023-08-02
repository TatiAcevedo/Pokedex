
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import Config from './components/Config';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/pokedex/:id" component={PokemonDetails} />
          <Route exact path="/config" component={Config} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
