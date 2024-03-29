import { useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// Internal context
import ContextApi from "./Context/ContextApi";
// General components
import Home from "./Views/home";
import Login from "./Views/login";
// Lost Ark components
import Argos from "./Views/lostArk/argos";
import Vykas from "./Views/lostArk/vykas";
import Valtan from "./Views/lostArk/valtan";
import Members from "./Views/members";
import Profile from "./Views/profile";
import Brelshaza from "./Views/lostArk/brelshaza";
import Managment from "./Views/managment";
import KakulSaydon from "./Views/lostArk/kakulSaydon";
import Contribution from "./Views/contribution";
//

// App
const App = () => {
  const { auth, setAuth, handleLogin, errorMessage, loginLoadingStatus } = useContext(ContextApi);

  // Auth login. Cuando carga la aplicación, esta extrae el authenticate del localstorage que será "true" o "false"
  // Compara, "true" con su booleano. La comparación responderá el booleano como la única opción disponible
  // Seteando la authenticación a true o false. (Continúa más abajo)
  useEffect(() => {
    const isLogginOk = localStorage.getItem("authenticate");
    const isIdUser = localStorage.getItem("idUser");
    //isLogginOk && JSON.parse(isLogginOk) ? setAuth(true) : setAuth(false);
    if (isLogginOk && JSON.parse(isLogginOk)) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    if (isIdUser === null) {
      setAuth(false);
      localStorage.clear();
    }
  }, []);
  // Acto seguido. Como el "auth" cambia a true o false, este setea el localstorage para el futuro
  useEffect(() => {
    localStorage.setItem("authenticate", auth);
  }, [auth]);
  return (
    <Routes>
      {/* Si no estoy Authenticado, la única ruta disponible es /login */}
      {!auth && (
        <Route
          path="/login"
          element={
            <Login
              auth={auth}
              handleLogin={handleLogin}
              errorMessage={errorMessage}
              loginLoadingStatus={loginLoadingStatus}
            />
          }
        />
      )}
      {/* Si ya estoy Authenticado, tengo acceso a todas las rutas */}
      {auth && (
        <>
          <Route path="/" element={<Home />} />
          {/* Los Ark Section */}
          <Route path="/argos" element={<Argos />} />
          <Route path="/vykas" element={<Vykas />} />
          <Route path="/valtan" element={<Valtan />} />
          <Route path="/members" element={<Members />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/brelshaza" element={<Brelshaza />} />
          <Route path="/managment" element={<Managment />} />
          <Route path="/kakul-saydon" element={<KakulSaydon />} />
          <Route path="/contribution" element={<Contribution />} />
        </>
      )}
      {/* Si intento entrar al login estando logeado, redirecciona al home. No existe 404 */}
      <Route path="*" element={<Navigate to={auth ? "/" : "/login"} />} />
    </Routes>
  );
};

export default App;

/*
  

*/
