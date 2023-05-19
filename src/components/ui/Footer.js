import React from "react";
import { makeStyles } from "@material-ui/core";
import footerAdornment from '../../assets/Footer Adornment.svg'

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
      [theme.breakpoints.down("md")] : {
        width: "21em"
      },
      [theme.breakpoints.down("xs")] : {
        width: "15em"
      },
    }
}))

export default function Footer() {
    const classes = useStyles()
    return <footer className={classes.footer}><img className={classes.adornemnt}  src={footerAdornment}/> </footer>
}