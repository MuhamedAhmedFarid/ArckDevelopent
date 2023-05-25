import React from "react";
import { makeStyles } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'


const useStyles = makeStyles((theme) => ({
  footer: {
    zIndex: 1382,
    width: "100%",
    backgroundColor: theme.palette.common.arcBlue,
    position: "relative",
  },
  adornemnt: {
    width: "25em",
    verticalAlign: "bottom", // u can use it on imgs where the img is on the place
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.8rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3rem",
  },
  icon:{
    height: '4em',
    width: "4em",
    [theme.breakpoints.down("xs")] : {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "2.5em",
    [theme.breakpoints.down("xs")] : {
      right: "0.6em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
      <Grid container className={classes.mainContainer} justify="center">
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(0)}
              to="/"
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => {props.setValue(1); props.setSelcted(0)}}
              to="/services"
              className={classes.link}
            >
              Services
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {props.setValue(1); props.setSelcted(1)}}
              to="/customsoftware"
              className={classes.link}
            >
              custom Software Development
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {props.setValue(1); props.setSelcted(2)}}
              to="/mobilapps"
              className={classes.link}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {props.setValue(1); props.setSelcted(3)}}
              to="/websites"
              className={classes.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              The Revulution
            </Grid>
            <Grid
              item
              onClick={() => props.setValue(2)}
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              Vision
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Technology
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Process
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about" className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about" className={classes.link}>
              Mistory
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about" className={classes.link}>
              team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(4)} to="/contact" className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <img className={classes.adornemnt} src={footerAdornment} />
      <Grid container spacing={2} className={classes.socialContainer} justify="flex-end">
        <Grid item component={"a"} href="https://www.facebook.com" rel="noopener  noreferrer" target="_blank">
          <img src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.twitter.com" rel="noopener  noreferrer" target="_blank">
          <img src={twitter}  className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.instagram.com" rel="noopener  noreferrer" target="_blank">
          <img src={instagram}  className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
