import { useState } from "react";
import ContextApi from ".";
//
//import apiCall from "../../Api";
//

const PokemonProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [trueOrFalse, setTrueOrFalse] = useState(true);

  return (
    <ContextApi.Provider
      value={{
        trueOrFalse,
        setTrueOrFalse,
        login,
        setLogin,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default PokemonProvider;

/*
const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Id es requerido");
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");
      const pokemonDetailResults = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetailResults);
    } catch (error) {
      setPokemons([]);
      setHasError(true);
      setErrorMessage("Algo a pasado");
    } finally {
      setIsLoading(false);
    }
  };
*/
