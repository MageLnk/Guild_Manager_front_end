import { useState } from "react";
import ContextApi from ".";
//
import apiCall from "../../Api";
//

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedGameOnSideBar, setselectedGameOnSideBar] = useState("initialState");

  // Temporal user. Después este usuario vendrá por Backend
  const [temporaryUser, setTemporaryUser] = useState({
    userName: "MageLink",
    password: "1234",
    status: "user/admin",
    games: [
      { name: "Aion", active: false },
      { name: "Black Desert", active: true },
      { name: "Final Fantasy XIV", active: false },
      { name: "Lost Ark", active: true },
      { name: "World of Warcraft", active: true },
    ],
  });
  // Temporal games. Después esto vendría por Backend
  const [temporaryLostArkGame, setTemporaryLostArkGame] = useState({
    userName: "Lost Ark",
    active: true,
    pages: [
      "Argos",
      "Vykas",
      "Valtan",
      "Members",
      "Profile",
      "Brelshaza",
      "Managment",
      "KakulSaydon",
      "Contribution",
    ],
  });

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
        selectedGameOnSideBar,
        setselectedGameOnSideBar,
        temporaryUser,
        temporaryLostArkGame,
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
