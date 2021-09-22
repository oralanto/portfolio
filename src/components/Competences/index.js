import React from "react";

import "./style.css";
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
      <div className="Competences__list">
        <p className="Competences__item">HTML5/CSS3</p>
        <p className="Competences__item">SCSS/SASS</p>
        <p className="Competences__item">Javascript</p>
        <p className="Competences__item">React</p>
        <p className="Competences__item">Redux</p>
        <p className="Competences__item">Material-ui</p>
        <p className="Competences__item">Bootstrap</p>
        <p className="Competences__item">Node</p>
        <p className="Competences__item">Express</p>
        <p className="Competences__item">PostgreSQL</p>
        <p className="Competences__item">Git/Github</p>
        <p className="Competences__item">Jira</p>
        <p className="Competences__item">MangoDB</p>
        <p className="Competences__item">AWS</p>
      </div>
    </div>
  );
};

export default Competences;
