import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

import Oboardgame from "../../img/Logo-oboardgame.png";
import Converter from "../../img/Converter-spe-react.png";
import Chatroom from "../../img/Chatroom-spe-react.png";
import github from "../../img/github.png";

import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const Projets = () => {
  const classes = useStyles();
  return (
    <div className="Projets" id="projets">
      <h2 className="Projets__title">Projets</h2>
      <div className="Projets__cards">
        <Card style={{ backgroundColor: "#41464B" }} className={classes.root + " Projets__card"}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Oboardgame}
              title="oboardgame logo"
            />
            <CardContent style={{ color: "#CECBC5" }} variant="h6">
              <Typography gutterBottom variant="h5" component="h2">
                O'BoardGame
              </Typography>
              <Typography variant="h6" component="p">
                Projet de formation: Site de location de jeux de sociétés entre
                particulier.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon style={{ color: "black", margin: "1rem" }} />
              <a
                className="Projets__card__link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/oralanto/Projet-titre-pro"
              >
                Voir le projet
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card style={{ backgroundColor: "#41464B" }} className={classes.root + " Projets__card"}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Converter}
              title="oboardgame logo"
            />
            <CardContent style={{ color: "#CECBC5" }} variant="h6">
              <Typography gutterBottom variant="h5" component="h2">
              Converter
              </Typography>
              <Typography variant="h6" component="p">
              Projet React: Convertisseur de devise
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon style={{ color: "black", margin: "1rem" }} />
              <a
                className="Projets__card__link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/oralanto/Converter-projet-React"
              >
                Voir le projet
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card style={{ backgroundColor: "#41464B" }} className={classes.root + " Projets__card"}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Chatroom}
              title="oboardgame logo"
            />
            <CardContent style={{ color: "#CECBC5" }} variant="h6">
              <Typography gutterBottom variant="h5" component="h2">
              Chatroom
              </Typography>
              <Typography variant="h6" component="p">
              Projet React: Simulation de Chatroom
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon style={{ color: "black", margin: "1rem" }} />
              <a
                className="Projets__card__link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/oralanto/Chatroom-v1-React"
              >
                Voir le projet
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="Projets__github">
        <a
          className="Projets__github__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/oralanto/"
        >
          <img src={github} alt="Icon Github" />
          <p className="Projets__github__text">Mon Github</p>
        </a>
      </div>
    </div>
  );
};

export default Projets;
