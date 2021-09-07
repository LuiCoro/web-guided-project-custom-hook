import React from 'react'

const PokeList = ({pokemen, handlePoke}) => {
  return (
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
  )
}

export default PokeList