import React from "react";
import "./styles.scss";
//Since we moved out axios call into a seperate file we dont need it here
// import axios from 'axios';
// import data from "../data";

//These were components created in App.js then moved into seperate files
import SelectedPokemon from './Components/SelectedPokemon'
import PokeList from './Components/PokeList'

//Our axios call that we also moved out from App.js
//We no longer need this beacuse we moved this into the (usePokeState.js) file
// import {getSelectedPokemon, getPokemons} from "./services/PokeService";

//Importing our State Hooks
import usePokeState from "./Hooks/usePokeState";

/* Important
*
* Never Hurts to build it out in app then move to components
* This helps test what exactly you are passing
* Try to keep the coding of the app contained inside the src folder!!!
* ALWAYS PAY ATTENTION TO WHAT WILL BE PASSED IN
*
*  */

//GOAL of custom hook sis to make the code cleaner and easier to understand not just for yourself but for your  team

function App() {
  
  const [selectedPokemon, handlePoke, pokemen] = usePokeState([], {})
  
  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon}/>
      <PokeList handlePoke={handlePoke} pokemen={pokemen}/>
    </div>
  );
}

export default App;
