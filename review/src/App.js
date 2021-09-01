import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPokemon from './components/SelectedPokemon';
import Pokedex from './components/Pokedex';

const getAllPokemon = ()=> {
  return (data);
}

const getPokemon = () => {

}


function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getAllPokemon());
  }, []);

  const handlePoke = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)

    getPokemon(id)
      .then((pokemon) => {
        setSelectedPokemon(pokemon);
      });
  };

  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon}/>
      <Pokedex pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;