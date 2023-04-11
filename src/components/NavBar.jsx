const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {
    const toPrevious = () => {
        setPokemonIndex(pokemonIndex -1);
      }
      const toNext = () => {
        setPokemonIndex(pokemonIndex +1);
      }
    return (
        <nav>
          {pokemonList.map((pokemon, index) =>
          (
            <>
            <button type="button" onClick={()=>setPokemonIndex(index)} key={pokemon.name}>{pokemon.name}</button>
            </>
          )
          )}
      </nav>
    );
};

export default NavBar;