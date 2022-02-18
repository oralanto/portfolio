import React from "react";

import "./style.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__container">
        <h1 className="PageNotFound__container__title">
          Cette page rencontre une erreur 404
        </h1>
        <p className="PageNotFound__container__text">
          Veuillez retourner à l'accueil ou revenez en arrière en utilisant la
          barre de navigation.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
