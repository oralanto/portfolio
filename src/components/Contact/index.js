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
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "20px",
            margin: "auto",
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #cecbc5",
              margin: "1em",
              padding: "1em 1em 2.5em",
            }}
          >
            <p className="contact-info">
              <RoomIcon style={{ marginRight: "2em" }} />
              Genève et périphérie / Haute-savoie / remote friendly
            </p>
          </div>
          <div
            style={{
              borderBottom: "1px solid #cecbc5",
              margin: "1em",
              padding: "1em 1em 2.5em",
            }}
          >
            <p className="contact-info">
              <MailIcon style={{ marginRight: "2em" }} />
              o.ralanto@gmail.com
            </p>
          </div>
          <div
            style={{
              margin: "1em",
              padding: "1em",
            }}
          >
            <p className="contact-info">
              <LinkedInIcon style={{ marginRight: "2em" }} />
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
