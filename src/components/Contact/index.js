import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";

import "./style.css";

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
        <List
          sx={{
            maxWidth: 500,
            bgcolor: "#5B6162",
            borderRadius: "5px",
            margin: "auto",
          }}
        >
          <ListItem>
            <RoomIcon />
            <ListItemText style={{ marginLeft: "1em", fontSize: "2em" }}>
              Genève et périphérie / Haute-savoie / remote friendly
            </ListItemText>
          </ListItem>
          <ListItem>
            <MailIcon />
            <ListItemText style={{ marginLeft: "1em", fontSize: "2em" }}>
              o.ralanto@gmail.com
            </ListItemText>
          </ListItem>
          <ListItem>
            <LinkedInIcon />
            <ListItemText style={{ marginLeft: "1em", fontSize: "2em" }}>
              <a
                href="https://www.linkedin.com/in/osée-ralantoarison"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#CECBC5" }}
              >
                Osée Ralantoarison
              </a>
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <div
        style={{
          margin: "auto",
          width: "60%",
        }}
      >
        <p style={{ fontStyle: "italic", fontSize: "2em" }}>
          « En suivant le chemin qui s'appelle plus tard, nous arrivons sur la
          place qui s'appelle jamais. », Sénèque.
        </p>
      </div>
    </div>
  );
};

export default Contact;
