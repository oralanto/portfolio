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

import "./style.css";

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
      <h1 className="Projets__title">Cultura Baguete</h1>
      <div className="projet-presentation-card">
        <p className="projet-presentation">
          Durant mon stage effectué dans la startup "Cultura baguete", j'ai pu
          coder et implémenter de nombreuses fonctionnalités. De la création des
          exercices au moyen de payement avec Stripe en passant par la
          modification de profil.{" "}
        </p>
        <p className="projet-presentation">
          La version MVP de ce projet m'as permis d'apprendre et me documenter
          sur plusieurs technologies. Le design du site était libre lors de la
          phase de développement, il passera ensuite entre les mains d'un
          designer.{" "}
        </p>
        <p className="projet-presentation">
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
      <div className="projet-presentation-card">
        <p className="projet-presentation">
          Les principales technologies utilisées sont : React, Redux, Bootstrap,
          Material-UI, CSS3, Chart, Calendly, Stripe, Node, Express, MangoDB,
          AWS.{" "}
        </p>
      </div>
    </div>
  );
};

export default CulturaBaguete;
