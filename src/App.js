import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import Competences from "./components/Competences";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import CulturaBaguete from "./components/Projets/CulturaBaguete";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/competences" component={Competences} />
          <Route exact path="/Presentation" component={Presentation} />
          <Route exact path="/projets" component={Projets} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/projets/culturabaguete"
            component={CulturaBaguete}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
