import React from "react";

import "./style.css";
import Background from "../../img/laptop.jpeg";
const Competences = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url('${Background}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        color: "#cecbc5",
      }}
    >
      <h2 className="Competences__title">Compétences</h2>
      <div className="Competences__list">
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          HTML5/CSS3
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          SCSS/SASS
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Javascript
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          React
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Redux
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Material-ui
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Bootstrap
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Node
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Express
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          PostgreSQL
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Git/Github
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          Jira
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          MangoDB
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          AWS
        </p>
      </div>
    </div>
  );
};

export default Competences;
