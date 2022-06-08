import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
import Home from "../Views/Home";
import Argos from "../Views/Argos";
import Members from "../Views/Members";
import Profile from "../Views/profile";

import FourOFour from "../Views/404";
//

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/argos">
          <Argos />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

/*

    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemon/:id">
          <PokeDetail />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </Router>
*/
