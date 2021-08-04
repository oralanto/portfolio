import React from "react";

import "./style.css";

const Competences = () => {
  return (
    <div className="Competences" id="competences">
      <h2 className="Competences__title">Compétences</h2>
      <div className="Competences__list">
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          HTML
        </p>
        <p className="Competences__item" style={{ backgroundColor: "#CECBC5" }}>
          CSS
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
      </div>
    </div>
  );
};

export default Competences;
