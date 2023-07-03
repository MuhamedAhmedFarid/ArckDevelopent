import React from "react";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import ButtonArrow from "./5.1 ButtonArrow";
import { Link } from "react-router-dom";

import  useMediaQuery  from "@material-ui/core/useMediaQuery";
import background from '../../assets/background.jpg'
import mobileBackgroun from '../../assets/mobileBackground.jpg'


const useStyles = makeStyles(theme => ({
    learnButton: {
        border: `1px solid ${theme.palette.common.arcBlue}`,
        color: theme.palette.common.arcBlue,
        borderWidth: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        height: "45px",
        width: '145px',
        fontSize: '0.9',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
            "&:hover": {
                backgroundColor: theme.palette.secondary.light
            }
            
        }
    },
    background : {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60em',
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackgroun})`,
            backgroundAttachment: "inherit",
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.arcOrange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: '2em',
        [theme.breakpoints.down("sm")] :{
            marginRight: 0,
            marginLeft: 0 ,
        }
        
    }
}))

export default function CallToAction(props) {
    const classes = useStyles()
    const theme = useTheme()
    const machesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container className={classes.background}  justify={machesSM ? 'center' : 'space-between'}  alignItems="center" direction={machesSM ? 'column' : "row"}>
            <Grid item style={{ marginLeft: machesSM ? 0 :  "5em",textAlign: machesSM ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item > 
                        <Typography variant="h2">Simpl  e Software. <br /> Revolution </Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>Take advantage of the  21st Century.</Typography>

                        <Grid item >
                            <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} className={classes.learnButton} veriant="outlined" ><span style={{ marginRight: 5 }}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} /></Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item >
                <Button component={Link} to="/estimate" veriant="contained" onClick={() => props.setValue(5)} className={classes.estimateButton}>
                    Free estimate
                </Button>
            </Grid>
            
        </Grid>
    )

}