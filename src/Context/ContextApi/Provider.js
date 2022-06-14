import { useState } from "react";
import ContextApi from ".";
//
import apiCall from "../../Api";
//

const ContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //API CALL

  const getLogin = async () => {
    try {
      setHasError(false);
      setErrorMessage("");
      const successLogin = await apiCall({
        url: `http://localhost:5000/admin/login`,
      });
      setLogin(successLogin);
    } catch (error) {
      setLogin(false);
      setHasError(true);
      setErrorMessage("Algo a pasado");
    } finally {
      console.log("Lo dejé por estructura, ya veré si lo dejo o no");
    }
  };

  //END API CALL

  return (
    <ContextApi.Provider
      value={{
        getLogin,
        login,
        setLogin,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;

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
