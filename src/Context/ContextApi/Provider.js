import { useState } from "react";
import ContextApi from ".";
//
import apiCall from "../../Api";
//

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [hasError, setHasError] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
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
  const [temporaryGamePages, setTemporaryGamePages] = useState([
    {
      gameName: "Lost Ark",
      active: true,
      pages: [
        "Argos",
        "Vykas",
        "Valtan",
        "Members",
        "Brelshaza",
        "Managment",
        "Kakul-Saydon",
        "Contribution",
      ],
    },
    {
      gameName: "World of Warcraft",
      active: true,
      pages: ["Profile"],
    },
  ]);

  //API CALL FOR LOGIN
  const handleLogin = async (userInfo) => {
    try {
      const successLogin = await apiCall({
        url: `http://localhost:5000/general/user`,
        method: "post",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Viendo el succesLogin", successLogin);
      console.log("Viendo el loginStatus", successLogin.loginStatus);
      if (successLogin.loginStatus) {
        setHasError(false);
        //setErrorMessage("");
        setAuth(true);
        console.log("Entré");
      }
      if (!successLogin.loginStatus) {
        setHasError(true);
        //setErrorMessage(successLogin.msg);
        setAuth(false);
        setLoginStatus(successLogin.msg);
        console.log("No entré, error por no match con el backend");
      }
      //setAuth(successLogin.loggedIn);
      // ¿Por qué si salió bien, entra acá?
    } catch (error) {
      console.log("Error dentro de catch", error);
      setAuth(false);
      setHasError(true);
      //setErrorMessage("Algo a pasado");
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
        handleLogin,
        loginStatus,
        setLoginStatus,
        selectedGameOnSideBar,
        setselectedGameOnSideBar,
        temporaryUser,
        temporaryGamePages,
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
