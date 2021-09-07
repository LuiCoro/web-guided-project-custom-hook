import React, {useState, useEffect} from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPokemon from './Components/SelectedPokemon'
import PokeList from './Components/PokeList'

/* Important
*
* Never Hurts to build it out in app then move to components
* This helps test what exactly you are passing
*
*  */

const getPokemons = () => {
  return (data)
}

const getSelectedPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}


function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  
  //This is getting all the {data} of Pokemon
  useEffect(() => {
    setPokemen(getPokemons());
  }, []);
  
  
  const handlePoke = (id) => {
    setSelectedPokemon()
      .then((data) => {
        setSelectedPokemon(data);
      })
      .catch(err =>
        console.log(err))
  };
  
  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen}/>
    </div>
  );
}

export default App;
