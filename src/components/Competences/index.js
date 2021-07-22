import React from 'react';

import './style.css';

const Competences = () => {
  return (
    <div className="Competences" id="competences">
      <h2 className="Competences__title">Compétences</h2>
      <div className="Competences__list">
        <p className="Competences__item">HTML</p>
        <p className="Competences__item">CSS</p>
        <p className="Competences__item">Javascript</p>
        <p className="Competences__item">React</p>
        <p className="Competences__item">Redux</p>
        <p className="Competences__item">Material-ui</p>
        <p className="Competences__item">Bootstrap</p>
        <p className="Competences__item">Node</p>
        <p className="Competences__item">Express</p>
        <p className="Competences__item">PostgreSQL</p>
        <p className="Competences__item">Git/Github</p>
      </div>
    </div>
  )
};

export default Competences;
