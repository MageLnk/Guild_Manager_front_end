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

import FourOFour from "./Views/404";

// App
const App = () => {
  const { auth, setAuth } = useContext(ContextApi);

  // Auth login
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
