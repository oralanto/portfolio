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
        <h2 className="Competences__item">HTML5/CSS3</h2>
        <h2 className="Competences__item">SCSS/SASS</h2>
        <h2 className="Competences__item">Javascript</h2>
        <h2 className="Competences__item">React</h2>
        <h2 className="Competences__item">React-native</h2>
        <h2 className="Competences__item">Redux</h2>
        <h2 className="Competences__item">Material-ui</h2>
        <h2 className="Competences__item">Bootstrap</h2>
        <h2 className="Competences__item">Node</h2>
        <h2 className="Competences__item">Express</h2>
        <h2 className="Competences__item">PostgreSQL</h2>
        <h2 className="Competences__item">Git/Github</h2>
        <h2 className="Competences__item">Jira</h2>
        <h2 className="Competences__item">Jest</h2>
        <h2 className="Competences__item">MangoDB</h2>
        <h2 className="Competences__item">AWS</h2>
      </div>
    </div>
  );
};

export default Competences;
