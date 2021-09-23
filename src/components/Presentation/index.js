import React from "react";

import "./style.css";

const presentation = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <h1 className="title">Présentation</h1>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "20px",
          margin: "2em",
          padding: "1em",
        }}
      >
        <p className="introduction">
          Je m'appelle Osée Ralantoarison, 27 ans et père de deux enfants. Je
          suis née, j'ai grandi et je vis en Haute-Savoie (74).
        </p>{" "}
        <p className="introduction">
          Les "nouvelles technologie" dans le sens large du terme, m'ont
          intéressé depuis mon plus jeune âge. Smartphone, ordinateur, jeux
          vidéo, intelligence artificielle, chaque programme me remplit de
          curiosités. J’ai donc commencé à chercher des informations sur la
          conception d’un programme, dans cet immense océan d’information, je
          suis tombé sur la programmation, le développement web, Java, Python,
          JavaScript… Ceci a encore plus ouvert ma curiosité, alors j’ai voulu
          apprendre et j’ai appris.
        </p>{" "}
        <p className="introduction">
          Autodidacte depuis de nombreuse années, j'ai découvert et commencer à
          apprendre le développement orienté web, principalement avec
          OpenClassroom, Udemy et YouTube. J’ai finalement choisi de faire une
          reconversion afin de fusionner passion et travail dans le domaine de
          l’informatique en intégrant l’école O’clock.
        </p>
        <p className="introduction">
          {" "}
          J’ai désormais acquis les compétences nécessaires pour être autonome
          dans le développement web avec Javascript, mais j’ai soif de
          connaissances, j'en veux encore, ce n’est que le début d’un long
          apprentissage.
        </p>
      </div>
    </div>
  );
};

export default presentation;
