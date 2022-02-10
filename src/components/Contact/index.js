import React, { useState, useEffect } from "react";

import emailjs from "emailjs-com";

import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";

import "./style.css";

const apikeys = {
  USER_ID: "user_NmYfX0mFPUWrmyfwvXex6",
  TEMPLATE_ID: "template_zc50qwh",
  SERVICE_ID: "service_ql6jye8",
};

const Contact = () => {
  const [apiKeys, setApiKeys] = useState();

  useEffect(() => {
    setApiKeys(apikeys);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Merci pour votre message", result.text);
        },
        (error) => {
          alert("Une erreur c'est produite, veuillez réessayer", error.text);
        }
      );
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        color: "#cecbc5",
      }}
    >
      <h1 className="contact-title">Contact</h1>
      <div className="contact-card">
        <div className="contact-infos">
          <RoomIcon className="contact__icons" />
          <p className="contact-info">
            Genève et périphérie / Haute-savoie / remote friendly
          </p>
        </div>
        <div className="contact-infos">
          <MailIcon className="contact__icons" />
          <p className="contact-info">o.ralanto@gmail.com</p>
        </div>
        <div
          style={{
            margin: "1em",
            padding: "1em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LinkedInIcon className="contact__icons" />
          <p className="contact-info">
            <a
              href="https://www.linkedin.com/in/osée-ralantoarison"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#CECBC5" }}
            >
              Osée Ralantoarison
            </a>
          </p>
        </div>
      </div>
      <div className="contact__containerForm">
        <form className="contact__containerForm__form" onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nom, prénom"
            className="contact__containerForm__form__input"
            required
          />
          <input
            name="mail"
            type="email"
            placeholder="example@mail.com"
            className="contact__containerForm__form__input"
            required
          />
          <textarea
            name="message"
            type="text"
            placeholder="Votre message..."
            className="contact__containerForm__form__textarea"
            required
          />
          <button className="contact__containerForm__form__button">
            Envoyer
          </button>
        </form>
      </div>
      <div
        style={{
          margin: "2em auto",
          width: "60%",
        }}
      >
        <p className="citation">
          « En suivant le chemin qui s'appelle plus tard, nous arrivons sur la
          place qui s'appelle jamais. », Sénèque.
        </p>
      </div>
    </div>
  );
};

export default Contact;
