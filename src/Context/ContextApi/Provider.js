import { useState } from "react";
import ContextApi from ".";
//
import apiCall from "../../Api";
//

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
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
      //console.log(successLogin.loggedIn);
      setAuth(successLogin.loggedIn);
      //Por qué cuando pasa a ser un objeto, valida igual el login?
    } catch (error) {
      setAuth(false);
      setHasError(true);
      setErrorMessage("Algo a pasado");
    } finally {
      //console.log("Lo dejé por estructura, ya veré si lo dejo o no");
    }
  };

  //END API CALL

  return (
    <ContextApi.Provider
      value={{
        auth,
        setAuth,
        getLogin,
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
