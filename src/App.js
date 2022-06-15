import { useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// Internal context
import ContextApi from "./Context/ContextApi";

// Components
import Home from "./Views/home";
import Argos from "./Views/argos";
import Login from "./Views/login";
import Vykas from "./Views/vykas";
import Valtan from "./Views/valtan";
import Members from "./Views/members";
import Profile from "./Views/profile";
import Brelshaza from "./Views/brelshaza";
import Managment from "./Views/managment";
import KakulSaydon from "./Views/kakulSaydon";
import Contribution from "./Views/contribution";

const App = () => {
  const { auth, setAuth } = useContext(ContextApi);

  useEffect(() => {
    const isLogginOk = localStorage.getItem("authenticate");
    isLogginOk && JSON.parse(isLogginOk) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("authenticate", auth);
  }, [auth]);
  return (
    <Routes>
      {!auth && (
        <Route
          path="/login"
          element={
            <Login
              authenticate={() => {
                setAuth(true);
              }}
            />
          }
        />
      )}
      {auth && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contribution" element={<Contribution />} />
        </>
      )}
      <Route path="*" element={<Navigate to={auth ? "/" : "/login"} />} />
    </Routes>
  );
};

export default App;

/*
//
import ContextApi from "./Context/ContextApi/Provider";
import Routes from "./Routes";
//

//

const App = () => {
  return (
    <ContextApi>
      <Routes />
    </ContextApi>
  );
};

export default App;

*/
