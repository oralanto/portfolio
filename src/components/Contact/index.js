import React from "react";

import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";

import "./style.css";

const Contact = () => {
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
