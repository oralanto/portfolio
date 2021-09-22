import React from "react";

import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";

const Contact = () => {
  return (
    <div
      className="Contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        color: "#cecbc5",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "60%",
        }}
      >
        <div
          style={{
            backgroundColor: "#5B6162",
            borderRadius: "20px",
            margin: "auto",
            padding: "3em",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #3E4347",
              margin: "1em",
              padding: "1em",
            }}
          >
            <p style={{ fontSize: "2em", textAlign: "start" }}>
              <RoomIcon style={{ marginRight: "2em" }} />
              Genève et périphérie / Haute-savoie / remote friendly
            </p>
          </div>
          <div
            style={{
              borderBottom: "1px solid #3E4347",
              margin: "1em",
              padding: "1em",
            }}
          >
            <p style={{ fontSize: "2em", textAlign: "start" }}>
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
            <p style={{ fontSize: "2em", textAlign: "start" }}>
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
          margin: "auto",
          width: "60%",
        }}
      >
        <p
          style={{
            fontStyle: "italic",
            fontSize: "2em",
            mixBlendMode: "difference",
          }}
        >
          « En suivant le chemin qui s'appelle plus tard, nous arrivons sur la
          place qui s'appelle jamais. », Sénèque.
        </p>
      </div>
    </div>
  );
};

export default Contact;
