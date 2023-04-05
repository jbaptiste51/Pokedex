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
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

const App = () => {
const [pokemonIndex, setPokemonIndex] = useState(0);
const toPrevious = () => {
  setPokemonIndex(pokemonIndex -1);
}
const toNext = () => {
  setPokemonIndex(pokemonIndex +1);
}

  return (
    <div className="App">
      <nav>
        {pokemonIndex > 0 && (
        <button type='button' onClick={toPrevious}>Previous</button>
        )}
        {pokemonIndex < pokemonList.length -1 &&(
        <button type='button' onClick={toNext}>Next</button>
        )}
      </nav>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    </div>
  )
}

export default App;
