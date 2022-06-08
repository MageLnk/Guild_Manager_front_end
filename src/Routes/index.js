import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
import Home from "../Views/Home";
import FourOFour from "../Views/404";
//

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
