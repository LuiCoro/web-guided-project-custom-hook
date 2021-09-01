import React from "react";
import "./styles.scss";

import SelectedPokemon from './components/SelectedPokemon';
import Pokedex from './components/Pokedex';
import usePokeState from './hooks/usePokeState';


function App() {
  const [selectedPokemon, pokemen, handlePoke ] = usePokeState();

  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon}/>
      <Pokedex pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;