import React from "react";

import "./style.css";

const Presentation = () => {
  return (
    <div className="Presentation" id="presentation">
      <h2 className="Presentation__title">Présentation</h2>
      <p className="Presentation__text">
        Bonjour et bienvenue sur mon portfolio je m'appel Osée, j'ai 26 ans et
        je suis développeur web.
      </p>
      <p className="Presentation__text">
        Passionné, je me tiens au courant des innovations techniques côté
        backend et frontend par une veille technique assidue. Ayant une bonne
        connaissances des technologies disponibles, je peux proposer des
        solutions complètes a des problématiques variées. Même si je suis plutôt
        orienté Frontend avec React, je peux m’occuper de mettre en œuvre un
        backend de bonne facture.
      </p>
      <p className="Presentation__text">Sociable et curieux je m'insère facilement dans les équipes et m'adapte aux technologies utilisé. Je cherche en priorité des contrats en télétravail.</p>
    </div>
  );
};

export default Presentation;
