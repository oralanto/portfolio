import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Accueil from "./imgProjets/Accueil.png";
import Cours from "./imgProjets/Cours.png";
import DashboardAdmin from "./imgProjets/Dashboard-admin.png";
import DashboardClient from "./imgProjets/Dashboard-client.png";
import ExerciceImage from "./imgProjets/Exercice-image.png";
import ExerciseOral from "./imgProjets/Exercise-oral.png";
import ListCours from "./imgProjets/Liste-cours.png";

const CulturaBaguete = () => {
  return (
    <div style={{ minHeight: "100vh", color: "#cecbc5" }}>
      <h1
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "6em",
          fontWeight: "bolder",
          letterSpacing: "0.5rem",
          marginBottom: "1em",
        }}
      >
        Cultura Baguete
      </h1>
      <div
        style={{
          backgroundColor: "#5b6162",
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
      <div style={{ width: "100%" }}>
        <ImageList
          style={{
            width: "90%",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
          }}
          sx={{ width: "50%", height: "auto" }}
        >
          <ImageListItem>
            <img src={Accueil} alt="Cultura baguete home page" />
            <ImageListItemBar title="Page d'accueil" />
          </ImageListItem>
          <ImageListItem>
            <img src={Cours} alt="Cultura baguete course page" />
            <ImageListItemBar title="Cours" />
          </ImageListItem>
          <ImageListItem>
            <img src={DashboardAdmin} alt="Cultura baguete course page" />
            <ImageListItemBar title="Dashboard Admin" />
          </ImageListItem>
          <ImageListItem>
            <img src={DashboardClient} alt="Cultura baguete client page" />
            <ImageListItemBar title="Dashboard client" />
          </ImageListItem>
          <ImageListItem>
            <img src={ExerciceImage} alt="Cultura baguete exercice page" />
            <ImageListItemBar title="Exercice de traduction" />
          </ImageListItem>
          <ImageListItem>
            <img src={ExerciseOral} alt="Cultura baguete exercice page" />
            <ImageListItemBar title="Exercice de compréhension oral" />
          </ImageListItem>
          <ImageListItem>
            <img src={ListCours} alt="Cultura baguete courses page" />
            <ImageListItemBar title="Liste des cours" />
          </ImageListItem>
        </ImageList>
      </div>
      <p style={{ fontSize: "2em", margin: "2em" }}>
        Les principales technologies utilisées sont : React, Redux, Bootstrap,
        Material-UI, CSS3, Chart, Calendly, Stripe, Node, Express, MangoDB, AWS.{" "}
      </p>
    </div>
  );
};

export default CulturaBaguete;
