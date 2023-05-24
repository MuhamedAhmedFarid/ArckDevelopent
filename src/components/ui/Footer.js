import React from "react";
import { makeStyles } from "@material-ui/core";
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  footer: {
    zIndex: 1382,
    width: "100%",
    backgroundColor: theme.palette.common.arcBlue,
    position: "relative"
  },
  adornemnt: {
    width: '25em',
    verticalAlign: 'bottom', // u can use it on imgs where the img is on the place
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    },
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3rem"
  }
}))

export default function Footer() {
  const classes = useStyles()
  return <footer className={classes.footer}>
    <Grid container className={classes.mainContainer} justify="center">
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/" className={classes.link} >
            Home
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/services" className={classes.link}>
            Services
          </Grid>
          <Grid item component={Link} to="/customsoftware" className={classes.link}>
            custom Software Development
          </Grid>
          <Grid item component={Link} to="/mobilapps"  className={classes.link}>
            Mobile App Development
          </Grid>
          <Grid item component={Link} to="/websites"  className={classes.link}>
            Website Development
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            The Revulution
          </Grid>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            Vision
          </Grid>
          <Grid item component={Link} to="/revolution" className={classes.link}>
            Technology
          </Grid>
          <Grid item component={Link} to="/revolution" className={classes.link}> 
            Process
          </Grid>
        </Grid>
      </Grid>


      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/about" className={classes.link}>
            About Us
          </Grid>
          <Grid item component={Link} to="/about" className={classes.link}>
            Mistory
          </Grid>
          <Grid item component={Link} to="/about" className={classes.link}>
            team
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid item component={Link} to="/contact" className={classes.link}>
            Contact Us
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <img className={classes.adornemnt} src={footerAdornment} />

  </footer>
}