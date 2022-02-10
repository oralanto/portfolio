import React from "react";
import TypingTextAnimation from "react-typing-text-animation";
import { SocialIcon } from "react-social-icons";

import "react-typing-text-animation/dist/index.css";
import "./style.css";
import profil from "../../img/profil.jpeg";

const Accueil = () => {
  return (
    <div className="Accueil">
      <div className="infos">
        <h2 className="name">Osée Ralantoarison</h2>
        <h1 className="title-job">
          <TypingTextAnimation text="Développeur web Javascript" />
        </h1>
      </div>
      <div className="img__block">
        <img src={profil} alt="Osée Ralantoarison" className="img__picture" />
        <div className="img__description">
          <p className="introduction">
            Bienvenu sur mon portfolio, je suis développeur web, réalisateur de
            site web, vitrine ou portfolio.
          </p>{" "}
          <p className="introduction">
            Vous avez besoin d'être visible sur Internet ? Alors vous êtes au
            bon endroit !
          </p>{" "}
        </div>
      </div>
      <div className="social-icons">
        <SocialIcon
          url="https://www.linkedin.com/in/osee-ralantoarison"
          className="social-icons__item"
        />
        <SocialIcon
          url="https://www.github.com/oralanto"
          className="social-icons__item"
        />
      </div>
    </div>
  );
};

export default Accueil;
