import React from "react";
import Button from "@material-ui/core/Button";

import linkedin from "../../img/linkedin.svg";
import "./style.css";

const Accueil = () => {
  return (
    <div className="Accueil">
      <div className="infos">
        <h2 className="name">Osée Ralantoarison</h2>
        <h1 className="title-job">Développeur web</h1>
      </div>
      <div className="introduction-card">
        <p className="introduction">Bonjour et bienvenue sur mon portfolio.</p>{" "}
        <p className="introduction">
          Vous trouverez ici toutes les informations me concernant, bonne visite
          !
        </p>{" "}
      </div>
      <Button color="inherit">
        <a
          className="linkedin-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/os%C3%A9e-ralantoarison-2b2265195/"
        >
          <h3 className="linkedin-text">Mon profil Linkedin</h3>
          <img
            className="linkedin-logo"
            src={linkedin}
            alt="Icon linkedin développeur web"
          />
        </a>
      </Button>
    </div>
  );
};

export default Accueil;
