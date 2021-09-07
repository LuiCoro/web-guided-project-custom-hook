import axios from "axios";
//importing our data in here now
import data from '../../data'

export const getPokemons = () => {
  return (data)
}

// This well be using in later projects make sure to practice or understand this part clearly!
export const getSelectedPokemon = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => {
      return res.data
    })
}