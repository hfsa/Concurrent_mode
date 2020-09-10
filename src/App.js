import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Tablet from "./Tablet";
const Data = React.lazy(() => import("./Data"));

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/Home" activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Data" activeStyle={{ color: "green" }}>
              Quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/Tablet" activeStyle={{ color: "green" }}>
              See..
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="App">
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Data">
            <Suspense fallback={<div>Wait for it..</div>}>
              <Data value={"human"} />
            </Suspense>
          </Route>
          <Route exact path="/Tablet">
            <Tablet />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
