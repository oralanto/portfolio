import React from "react";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Accueil from "./imgProjets/Accueil.png";
import Cours from "./imgProjets/Cours.png";
import DashboardAdmin from "./imgProjets/Dashboard-admin.png";
import DashboardClient from "./imgProjets/Dashboard-client.png";
import ExerciceImage from "./imgProjets/Exercice-image.png";
import ExerciseOral from "./imgProjets/Exercise-oral.png";
import ListCours from "./imgProjets/Liste-cours.png";

const slideImages = [
  Accueil,
  Cours,
  DashboardAdmin,
  DashboardClient,
  ExerciceImage,
  ExerciseOral,
  ListCours,
];

const CulturaBaguete = () => {
  return (
    <div style={{ minHeight: "100vh", color: "#cecbc5" }}>
      <h1
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "6em",
          fontWeight: "bolder",
          letterSpacing: "0.5rem",
          margin: "1em",
        }}
      >
        Cultura Baguete
      </h1>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "20px",
          margin: "2em",
          padding: "1em",
        }}
      >
        <p style={{ fontSize: "2em", margin: "2em", color: "#cecbc5" }}>
          Durant mon stage effectué dans la startup "Cultura baguete", j'ai pu
          coder et implémenter de nombreuses fonctionnalités. De la création des
          exercices au moyen de payement avec Stripe en passant par la
          modification de profil.{" "}
        </p>
        <p style={{ fontSize: "2em", margin: "2em", color: "#cecbc5" }}>
          La version MVP de ce projet m'as permis d'apprendre et me documenter
          sur plusieurs technologies. Le design du site était libre lors de la
          phase de développement, il passera ensuite entre les mains d'un
          designer.{" "}
        </p>
        <p style={{ fontSize: "2em", margin: "2em", color: "#cecbc5" }}>
          Voici quelque images du site en attendant qu'il soit en ligne :{" "}
        </p>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="slide-container">
          <Zoom scale={0.4}>
            {slideImages.map((each, index) => (
              <img
                key={index}
                style={{ width: "100%" }}
                src={each}
                alt="Cultura baguete preview"
              />
            ))}
          </Zoom>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <p style={{ fontSize: "2em", margin: "2em", padding: "1em" }}>
          Les principales technologies utilisées sont : React, Redux, Bootstrap,
          Material-UI, CSS3, Chart, Calendly, Stripe, Node, Express, MangoDB,
          AWS.{" "}
        </p>
      </div>
    </div>
  );
};

export default CulturaBaguete;
