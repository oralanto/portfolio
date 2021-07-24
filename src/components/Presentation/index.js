import React from "react";

import "./style.css";

const Presentation = () => {
  return (
    <div className="Presentation" id="presentation">
      <h2 className="Presentation__title">Présentation</h2>
      <p className="Presentation__text">
        Bonjour et bienvenue sur mon portfolio, je m'appelle Osée, j'ai 26 ans et
        je suis développeur web.
      </p>
      <p className="Presentation__text">
        Passionné, je me tiens au courant des innovations techniques côté
        backend et frontend par une veille technique assidue. Ayant une bonne
        connaissance des technologies disponibles, je peux proposer des
        solutions complètes à des problématiques variées. Même si je suis plutôt
        orienté Frontend avec React, je peux m’occuper de mettre en œuvre un
        backend de bonne facture.
      </p>
      <p className="Presentation__text">Doté d'un bon relationnel, je m'insère facilement dans les équipes et m'adapte aux technologies utilisés. J'aime partager mon savoir-faire au sein d'une ambiance collaborative et positive.</p>
      <p className="Presentation__text">Je cherche en priorité un contrat en télétravail.</p>
    </div>
  );
};

export default Presentation;
