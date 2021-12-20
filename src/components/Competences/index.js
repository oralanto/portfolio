import React from "react";

import "./style.css";

const design = [
  "HTML5/CSS3",
  "CSS in JS",
  "SCSS/SASS",
  "Material UI",
  "Bootstrap",
];
const languages = [
  "Javascript",
  "React JS",
  "React Native",
  "Redux",
  "Node",
  "Express",
];
const bdd = ["PostgreSQL", "SQL", "MandoDB"];
const organisation = [
  "Scrum/Agile",
  "Jira",
  "Slack",
  "Discord",
  "Zoom",
  "Git/Github",
];
const deploy = ["AWS", "Netlify", "Heroku"];
const Competences = () => {
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
        <h2 className="Competences__subtitle">Langages et Frameworks</h2>
        <div className="Competences__list">
          {languages.map((item) => (
            <p className="Competences__item">{item}</p>
          ))}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Design</h2>
        <div className="Competences__list">
          {design.map((item) => (
            <p className="Competences__item">{item}</p>
          ))}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Base de données</h2>
        <div className="Competences__list">
          {bdd.map((item) => (
            <p className="Competences__item">{item}</p>
          ))}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Organisation de travail</h2>
        <div className="Competences__list">
          {organisation.map((item) => (
            <p className="Competences__item">{item}</p>
          ))}
        </div>
      </div>
      <div className="Competences__block">
        <h2 className="Competences__subtitle">Déploiements</h2>
        <div className="Competences__list">
          {deploy.map((item) => (
            <p className="Competences__item">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
