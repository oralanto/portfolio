import React from "react";
import Button from "@material-ui/core/Button";

import linkedin from "../../img/linkedin.svg";
import "./style.css";

const Accueil = () => {
  return (
    <div className="Accueil" id="acceuil">
      <div className="infos">
        <h2 className="name">Osée Ralantoarison</h2>
        <h1 className="title-job">Développeur web</h1>
      </div>
      <Button color="inherit">
        <a
          className="linkedin-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/os%C3%A9e-ralantoarison-2b2265195/"
        >
          <img
            className="linkedin-logo"
            src={linkedin}
            alt="Icon linkedin développeur web"
          />
          <p className="linkedin-text">Mon profil Linkedin</p>
        </a>
      </Button>
    </div>
  );
};

export default Accueil;
