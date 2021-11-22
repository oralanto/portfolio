import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const presentation = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <h1 className="title__presentation">Présentation</h1>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "20px",
          margin: "2em",
          padding: "1em",
        }}
      >
        <h2 className="subtitle-introduction">Qui suis-je ?</h2>
        <p className="introduction">
          Je m'appelle Osée Ralantoarison, 27 ans et père de deux enfants. Je
          vis entre la Haute-Savoie en France et Genève en suisse.
        </p>{" "}
        <p className="introduction">
          Les "nouvelles technologies" dans le sens large du terme, m'ont
          intéressé depuis mon plus jeune âge. Smartphone, ordinateur, jeux
          vidéo, intelligence artificielle, chaque programme me remplit de
          curiosités.
        </p>{" "}
        <p className="introduction">
          J’ai donc commencé à chercher des informations sur la conception d’un
          programme, dans cet immense océan d’information, je suis tombé sur la
          programmation, le développement web, Java, Python, JavaScript… Ceci a
          encore plus ouvert ma curiosité, alors j’ai voulu apprendre et j’ai
          appris.
        </p>{" "}
        <h2 className="subtitle-introduction">Ma formation</h2>
        <p className="introduction">
          J'ai découvert et commencé à apprendre le développement orienté web,
          principalement en autodidacte avec OpenClassroom, Udemy, YouTube et de
          nombreuses application éducatives sur mobile. J’ai finalement choisi
          de faire une reconversion afin de fusionner passion et travail dans le
          domaine de l’informatique en intégrant l’école O’clock.
        </p>
        <p className="introduction">
          L'école O'clock propose de nombreuse formule en télépresentiel, j'ai
          choisis la formation intensive sur 6 mois{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://oclock.io/formations/developpeur-web-fullstack-javascript"
          >
            "Fullstack Javascript"
          </a>
          , afin d'être opérationnel sur le front et le back en me spécialisant
          sur React.js.{" "}
        </p>
        <p className="introduction">
          {" "}
          J’ai désormais acquis les compétences nécessaires pour être autonome
          dans le développement web avec Javascript, mais j’ai soif de
          connaissances, j'en veux encore, ce n’est que le début d’un long
          apprentissage.
        </p>
        <h2 className="subtitle-introduction">Mon savoir être</h2>
        <p className="introduction">
          De nature introvertie, j'ai pris l'habitude de travailler en autonomie
          afin de trouver les solutions par moi-même. Je sais également
          travailler en équipe en bonne condition avec une bonne communication.
        </p>
        <p className="introduction">
          Ma curiosité me pousse à apprendre et essayer de nouvelles choses,
          j'aime me former et cherche toujours à monter en compétences
        </p>
        <p className="introduction">
          Si vous cherchez une personne humble qui aime s'investir et apprendre
          en permanance, hésitez pas à me contacter en cliquant{" "}
          <Link to="/contact">ici</Link>.
        </p>
      </div>
    </div>
  );
};

export default presentation;
