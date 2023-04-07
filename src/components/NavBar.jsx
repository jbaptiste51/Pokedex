const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {
    const toPrevious = () => {
        setPokemonIndex(pokemonIndex -1);
      }
      const toNext = () => {
        setPokemonIndex(pokemonIndex +1);
      }
    return (
        <nav>
        {pokemonIndex > 0 && (
        <button type='button' onClick={toPrevious}>Previous</button>
        )}
        {pokemonIndex < pokemonList.length -1 &&(
        <button type='button' onClick={toNext}>Next</button>
        )}
      </nav>
    );
};

export default NavBar;