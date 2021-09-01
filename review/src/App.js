import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPokemon from './components/SelectedPokemon';
import Pokedex from './components/Pokedex';
import { getAllPokemon, getPokemon } from './services/pokeService';


const usePokeState = () => {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getAllPokemon());
  }, []);

  const handlePoke = (id) => {
    getPokemon(id)
      .then((pokemon) => {
        setSelectedPokemon(pokemon);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return [selectedPokemon, pokemen]
}


function App() {
  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon}/>
      <Pokedex pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;