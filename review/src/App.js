import React, {useState, useEffect} from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  
  useEffect(() => {
    setPokemen(data);
  }, []);
  
  // This (handlePoke) function is in charge of what to display when we click on a pokemon
  // It will be passing the id of the pokemon to display the correct information
  const handlePoke = (id) => {
    // Here we create a axios.get request to go into our list and grab the pokemon by there id
    // your gonna need to use ( `${(name of data id)}` )
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        //Here we are setting our selected state to display the information when we click on a pokemon
        setSelectedPokemon(res.data);
      });
  };
  
  return (
    <div className="App">
      <div id="selectedDiv">
        <h2>Selected Pokemon: {selectedPokemon.name || "none"}</h2>
        {selectedPokemon.name && (
          <div>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.sprites.front_default}
            />
            <h5>Height: {selectedPokemon.height}</h5>
            <h5>Weight: {selectedPokemon.weight}</h5>
            <h5>Abilities:</h5>
            <ul>
              {selectedPokemon.abilities.map((a) => (
                <li key={a.ability.name}>
                  {a.ability.name} - Slot {a.slot}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div id="pokeList">
        {/* We (map) out our data to single pokemon*/}
        {pokemen.map((pokemon) => (
          // We pass in our (handlePoke(id) function here to make sure when we click on a pokemon it will render the correct one
          // Always remeber to pass on a key when mapping out data
          <div
            onClick={() => handlePoke(pokemon.id)}
            key={pokemon.id}
            className="pokemon"
          >
            {/* Img Tags ALWAYS NEED a SRC & ALT!*/}
            <img src={pokemon.img} alt={pokemon.name}/>
            <div>
              <h3>{pokemon.name}</h3>
              {pokemon.next_evolution &&
              // we are mapping out the next eveloutions for the pokemon
              // And as you can see we still need to add a key
              pokemon.next_evolution.map((e) => <p key={e.num}>{e.name}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
