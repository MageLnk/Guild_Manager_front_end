import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
import Home from "../Views/home";
import Argos from "../Views/argos";
import Vykas from "../Views/vykas";
import Valtan from "../Views/valtan";
import Members from "../Views/members";
import Profile from "../Views/profile";
import Brelshaza from "../Views/brelshaza";
import KakulSaydon from "../Views/kakulSaydon";
import Contribution from "../Views/contribution";

import FourOFour from "../Views/404";
import Managment from "../Views/managment";
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
        <Route exact path="/vykas">
          <Vykas />
        </Route>
        <Route exact path="/valtan">
          <Valtan />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/brelshaza">
          <Brelshaza />
        </Route>
        <Route exact path="/managment">
          <Managment />
        </Route>
        <Route exact path="/kakul-saydon">
          <KakulSaydon />
        </Route>
        <Route exact path="/contribution">
          <Contribution />
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
