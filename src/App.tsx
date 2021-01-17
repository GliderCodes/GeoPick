import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { SIGN_UP } from "./constants/routes";
import SignUp from "./pages/signup-screen";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to={SIGN_UP}>Sign up</Link>{" "}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={SIGN_UP} component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
