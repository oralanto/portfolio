import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import linkedin from "../../img/linkedin.svg";
import logo from "../../img/logo.png";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

const Accueil = () => {
  const classes = useStyles();


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="Accueil" id="acceuil">
      <div className={classes.header + " disabled"}>
    <div className="logo">
      <img src={logo} alt="logo Osée Ralantoarison"/>
    </div>
        <AppBar
          style={
            {
              background: "transparent",
              boxShadow: 'none',
            }
          }
          className="header"
          position="static">
          <Toolbar>
            <Button color="inherit">
              <a className="menu-item disabled" href="#accueil">
                Accueil
              </a>
            </Button>
            <Button color="inherit">
              <a className="menu-item disabled" href="#presentation">
                Présentation
              </a>
            </Button>
            <Button color="inherit">
              <a className="menu-item disabled" href="#competences">
                Compétences
              </a>
            </Button>
            <Button color="inherit">
              <a className="menu-item disabled" href="#projets">
                Projets
              </a>
            </Button>
            <Button color="inherit">
              <a
                className="menu-item disabled"
                href="mailto:o.ralantoarison@gmail.com"
              >
                Contact
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          size="medium"
        >
          <MenuIcon
            onClick={handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a className="menu-burger-item" href="#accueil">
                Accueil
              </a></MenuItem>
            <MenuItem onClick={handleClose}>
              <a className="menu-burger-item" href="#presentation">
                Présentation
              </a></MenuItem>
            <MenuItem onClick={handleClose}>
              <a className="menu-burger-item" href="#competences">
                Compétences
              </a></MenuItem>
            <MenuItem onClick={handleClose}>
              <a className="menu-burger-item" href="#projets">
                Projets
              </a></MenuItem>
          </Menu>
        </IconButton>
      </div>
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
          <img src={linkedin} alt="Icon linkedin développeur web" />
          <p className="linkedin-text">Mon profil Linkedin</p>
        </a>
      </div>
    </div>
  );
};

export default Accueil;
