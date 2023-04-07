import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar.jsx';

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

  return (
    <div className="App">
      <NavBar pokemonIndex = {pokemonIndex} setPokemonIndex = {setPokemonIndex}
      pokemonList = {pokemonList}/>

      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    </div>
  )
}

export default App;
