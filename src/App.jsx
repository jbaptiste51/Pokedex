import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App = () => {

  return (
    <div className="App">
      <PokemonCard pokemon = {pokemonList[0]}/>
    </div>
  )
}

export default App;
