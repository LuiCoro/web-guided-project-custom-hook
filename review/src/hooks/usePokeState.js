import { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './../services/pokeService';

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
  
    return [selectedPokemon, pokemen, handlePoke];
}

export default usePokeState;