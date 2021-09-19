import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import Accueil from "./imgProjets/Accueil.png";
import Cours from "./imgProjets/Cours.png";
import DashboardAdmin from "./imgProjets/Dashboard-admin.png";
import DashboardClient from "./imgProjets/Dashboard-client.png";
import ExerciceImage from "./imgProjets/Exercice-image.png";
import ExerciseOral from "./imgProjets/Exercise-oral.png";
import ListCours from "./imgProjets/Liste-cours.png";

const CulturaBaguete = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 style={{ fontSize: "6em" }}>Cultura Baguete</h1>
      <p style={{ fontSize: "2em", margin: "2em" }}>
        Durant mon stage effectué dans la startup "Cultura baguete", j'ai pu
        coder et implémenter de nombreuses fonctionnalités. De la création des
        exercices au moyen de payement (Stripe) en passant par la modification
        de profil, la version MVP de ce projet m'as permis d'apprendre beaucoup
        de choses. Le design du site était libre lors de la phase de
        développement. Il passera ensuite entre les mains d'un designer.{" "}
      </p>
      <p style={{ fontSize: "2em", margin: "2em" }}>
        Voici quelque images du site en attendant qu'il soit en ligne :{" "}
      </p>
      <div style={{ width: "100%" }}>
        <ImageList
          style={{ width: "auto", margin: "1em" }}
          sx={{ width: "50%", height: "auto" }}
        >
          <ImageListItem key="Subheader" cols={2}></ImageListItem>
          <ImageListItem>
            <img src={Accueil} alt="Cultura baguete home page" loading="lazy" />
            <ImageListItemBar title="Page d'accueil" />
          </ImageListItem>
          <ImageListItem>
            <img src={Cours} alt="Cultura baguete course page" loading="lazy" />
            <ImageListItemBar title="Cours" />
          </ImageListItem>
          <ImageListItem>
            <img
              src={DashboardAdmin}
              alt="Cultura baguete course page"
              loading="lazy"
            />
            <ImageListItemBar title="Dashboard Admin" />
          </ImageListItem>
          <ImageListItem>
            <img
              src={DashboardClient}
              alt="Cultura baguete client page"
              loading="lazy"
            />
            <ImageListItemBar title="Dashboard client" />
          </ImageListItem>
          <ImageListItem>
            <img
              src={ExerciceImage}
              alt="Cultura baguete exercice page"
              loading="lazy"
            />
            <ImageListItemBar title="Exercice de traduction" />
          </ImageListItem>
          <ImageListItem>
            <img
              src={ExerciseOral}
              alt="Cultura baguete exercice page"
              loading="lazy"
            />
            <ImageListItemBar title="Exercice de compréhension oral" />
          </ImageListItem>
          <ImageListItem>
            <img
              src={ListCours}
              alt="Cultura baguete courses page"
              loading="lazy"
            />
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
