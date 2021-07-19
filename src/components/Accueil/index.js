import React from 'react';

// import moduleName from ''

import linkedin from '../../img/linkedin.svg';
import './style.css';

const Accueil = () => {
  return (
    <div className="Accueil" id="acceuil">
      <header className="header">
        <p className="logo">O.R</p>
        <menu className="menu">
          <a className="menu-item disabled" href="#accueil">Accueil</a>
          <a className="menu-item disabled" href="#presentation">Présentation</a>
          <a className="menu-item disabled" href="#competences">Compétences</a>
          <a className="menu-item disabled" href="#projets">Projets</a>
          <a className="menu-item" href="mailto:o.ralantoarison@gmail.com">Contact</a>
        </menu>
      </header>
      <div className="infos">
        <h2 className="name">Osée Ralantoarison</h2>
        <h1 className="title-job">Développeur web</h1>
      </div>
      <div className="linkedin">
      <a
        className="linkedin-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/os%C3%A9e-ralantoarison-2b2265195/"
      >
      <img
          src={linkedin}
          alt="Icon linkedin développeur web" />
          <p className="linkedin-text">Mon profil Linkedin</p>
      </a>
      </div>
    </div>
  )
};

export default Accueil;
