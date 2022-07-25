import { useState } from "react";
import ContextApi from ".";
//
import apiCall from "../../Api";
//

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  //const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginLoadingStatus, setLoginLoadingStatus] = useState("");
  const [selectedGameOnSideBar, setselectedGameOnSideBar] = useState("initialState");
  const [userData, setUserData] = useState("");

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
      setLoginLoadingStatus(true);
      const successLogin = await apiCall({
        url: `http://localhost:5000/general/user`,
        method: "post",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (successLogin.loginStatus) {
        setLoginLoadingStatus(false);
        setAuth(true);
        localStorage.setItem("idUser", successLogin.userId);
      }
      if (!successLogin.loginStatus) {
        setLoginLoadingStatus(false);
        setErrorMessage(successLogin.msg);
        setAuth(false);
      }
      // ¿Por qué si salió bien, entra acá? No debería entrar abajo?
    } catch (error) {
      console.log("Error dentro de catch", error);
      setAuth(false);
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
        handleLogin,
        errorMessage,
        loginLoadingStatus,
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
