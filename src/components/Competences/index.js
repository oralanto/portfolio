import React, { useState, useEffect } from "react";

import "./style.css";
import skills from "../../Data/Skills";

const Competences = () => {
  const [dataSkills, setDataSkills] = useState();

  useEffect(() => {
    setDataSkills(skills);
  }, []);

  console.log(dataSkills);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "#cecbc5",
      }}
    >
      <h1 className="Competences__title">Compétences</h1>
      <div className="Competences__block">
        <p className="Competences__description">
          Réalisation de site web responsive, applications mobile, base de
          données et déploiements.
        </p>
        <h2 className="Competences__subtitle">Langages et Frameworks</h2>
        <div className="Competences__list">
          {dataSkills ? (
            dataSkills.languages.map((item, index) => (
              <p className="Competences__item" key={index}>
                {item}
              </p>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Design</h2>
        <div className="Competences__list">
          {dataSkills ? (
            dataSkills.design.map((item, index) => (
              <p className="Competences__item" key={index}>
                {item}
              </p>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Base de données</h2>
        <div className="Competences__list">
          {dataSkills ? (
            dataSkills.bdd.map((item, index) => (
              <p className="Competences__item" key={index}>
                {item}
              </p>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Organisation de travail</h2>
        <div className="Competences__list">
          {dataSkills ? (
            dataSkills.organisation.map((item, index) => (
              <p className="Competences__item" key={index}>
                {item}
              </p>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Déploiements</h2>
        <div className="Competences__list">
          {dataSkills ? (
            dataSkills.deploy.map((item, index) => (
              <p className="Competences__item" key={index}>
                {item}
              </p>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Competences;
