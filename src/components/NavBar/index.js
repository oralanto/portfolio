import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../../img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#5B6162",
    color: "black",
    borderBottom: ".5px solid white",
  },
  logo: {
    position: "absolute",
    top: "-25px",
    left: "20px",
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

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className={classes.header + " disabled"}>
        <div className={classes.logo}>
          <img src={logo} alt="logo Osée Ralantoarison" />
        </div>
        <AppBar
          style={{
            background: "transparent",
            boxShadow: "none",
          }}
          className="header"
          position="static"
        >
          <Toolbar>
            <Button color="inherit">
              <Link className="menu-item disabled" to="/">
                Accueil
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="menu-item disabled" to="/presentation">
                Présentation
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="menu-item disabled" to="/competences">
                Compétences
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="menu-item disabled" to="/projets">
                Projets
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="menu-item disabled" to="/contact">
                Contact
              </Link>
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
          <MenuIcon onClick={handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className="menu-burger-item" to="/">
                Accueil
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="menu-burger-item" to="/presentation">
                Présentation
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="menu-burger-item" to="/competences">
                Compétences
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="menu-burger-item" to="/projets">
                Projets
              </Link>
            </MenuItem>
          </Menu>
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
