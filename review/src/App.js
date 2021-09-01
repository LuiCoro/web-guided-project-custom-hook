import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPokemon from './components/SelectedPokemon';
import Pokedex from './components/Pokedex';
import usePokeState from './hooks/usePokeState';

import { getAllPokemon, getPokemon } from './services/pokeService';


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