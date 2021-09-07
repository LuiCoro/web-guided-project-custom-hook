import React,{useState, useEffect} from 'react'

import {getSelectedPokemon, getPokemons} from '../services/PokeService'

const usePokeState = (initPoikemon, initSelectedPokemon) => {
  const [pokemen, setPokemen] = useState(initPoikemon);
  const [selectedPokemon, setSelectedPokemon] = useState(initSelectedPokemon);
  
  
  //This is getting all the {data} of Pokemon
  useEffect(() => {
    setPokemen(getPokemons());
  }, []);
  
  const handlePoke = (id) => {
    getSelectedPokemon(id)
      .then((data) => {
        console.log(data)
        setSelectedPokemon(data);
      })
      .catch(err =>
        console.log(err))
  };
  return ([selectedPokemon, handlePoke, pokemen])
}

export default usePokeState