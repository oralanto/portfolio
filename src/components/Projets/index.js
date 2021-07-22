import React from "react";
import Button from "@material-ui/core/Button";

import Oboardgame from "../../img/Logo-oboardgame.png";
import Converter from "../../img/Converter-spe-react.png";
import Chatroom from "../../img/Chatroom-spe-react.png";
import github from "../../img/github.png";

import "./style.css";

const Projets = () => {
  return (
    <div className="Projets" id="projets">
      <h2 className="Projets__title">Projets</h2>
      <div className="Projets__cards">
        <article className="Projets__card">
          <img
            src={Oboardgame}
            className="Projets__card__img"
            alt="Projet location de jeux de sociétés entre particulier avec react node express redux api"
          />
          <p className="Projets__card__title">O'BoardGame</p>
          <p className="Projets__card__desc">Site de location</p>
          <Button>
            <a
              className="Projets__card__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/oralanto/Projet-titre-pro"
            >
              Voir le projet
            </a>
          </Button>
        </article>
        <article className="Projets__card">
          <img
            src={Converter}
            className="Projets__card__img"
            alt="Convertisseur de monnaie devise projet react node api"
          />
          <p className="Projets__card__title">Converter</p>
          <p className="Projets__card__desc">
            Projet React: Convertisseur de devise
          </p>
          <Button>
            <a
              className="Projets__card__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/oralanto/Converter-projet-React"
            >
              Voir le projet
            </a>
          </Button>
        </article>
        <article className="Projets__card">
          <img
            src={Chatroom}
            className="Projets__card__img"
            alt="Chatroom salon de chat messagerie projet react node"
          />
          <p className="Projets__card__title">Chatroom</p>
          <p className="Projets__card__desc">
            Projet React: Simulation de Chatroom
          </p>
          <Button>
            <a
              className="Projets__card__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/oralanto/Chatroom-v1-React"
            >
              Voir le projet
            </a>
          </Button>
        </article>
      </div>
      <div className="Projets__github">
        <a
          className="Projets__github__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/oralanto/"
        >
          <img src={github} alt="Icon Github" />
          <p className="Projets__github__text">Mon Github</p>
        </a>
      </div>
    </div>
  );
};

export default Projets;
