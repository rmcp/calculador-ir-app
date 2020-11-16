import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddCalculo from "./components/AddCalculo";
import CalculosList from "./components/CalculosList";
import Resultado from "./components/Resultado";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/calculos" className="navbar-brand">
            Aplicativo
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/calculos"} className="nav-link">
                Cálculos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Novo
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/calculos"]} component={CalculosList} />
            <Route exact path="/add" component={AddCalculo} />
            <Route exact path="/resultado" component={Resultado} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
