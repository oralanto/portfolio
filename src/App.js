import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Competences from "./components/Competences";
import Footer from "./components/Footer";
import Projets from "./components/Projets";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/competences" component={Competences} />
          <Route exact path="/projets" component={Projets} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
