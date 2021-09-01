import axios from 'axios';
import data from './../../data';

const getAllPokemon = ()=> {
    return (data);
}
  
const getPokemon = id => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(resp => {
            return(resp.data);
        });
}