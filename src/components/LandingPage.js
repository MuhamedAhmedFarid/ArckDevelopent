import React from "react";
import Lottie from "react-lottie";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import Button  from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ui/5.1 ButtonArrow";
import animationData from '../animations/landinganimation/data'
import  Typography  from "@material-ui/core/Typography";
import customSoftwareIcon from '../assets/Custom Software Icon.svg'


const useStyles = makeStyles(theme => ({
    animation:{
        minWidth: "21em",
        maxWidth: "50em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")] :{
            maxWidth: "30em"
        }
        
    },
    estimteButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.arcOrange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }

    },
    buttonContainer: {
        marginTop: '5em',
        [theme.breakpoints.down("md")]:{
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "2em"
        },
    },
    learnButtonHero: {
        border:  "2px blue",   
        color: theme.palette.common.arcBlue,
        borderWidth: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        height: "45px",
        width: '145px',
        // backgroundColor: theme.palette.common.blue,
        // color: theme.palette.common.arcOrange,
        // borderRadius: 50,
        // height: 45,
        // width: 145,
        // fontFamily: "Roboto",
        // fontWeight: "bold",
        // textTransform: "none",
        // borderWidth: 2
        
        
    },
    textContainer:{
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")] : {
            marginLeft: 0
        }
    }
}))

export default function LandingPage() {
    const classes = useStyles()
    const theme = useTheme()
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    

    return (
        <Grid container direction="column">
            <Grid item > //hero block
                <Grid container justify="flex-end" alignItems="center">
                    <Grid sm item className={classes.textContainer} >
                        <Typography align="center" variant="h2">Bringing West coast Technology <br/> to the Medwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item >
                                <Button className={classes.estimteButton} veriant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item >
                                <Button className={classes.learnButtonHero} veriant="outlined"><span style={{marginRight: 10}}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid> 
            <Grid item >
                <Grid container direction="row">
                    <Grid item>
                        <Typography veriant="h4">
                            Custtom Software Developent
                        </Typography>
                        <Typography variant="subtitle1">
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investgations to {""} <span> celebration</span>
                        </Typography>
                        <Button variant="outline">
                        <span style={{marginRight: 10}}>Learn More <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/></span>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={customSoftwareIcon} />

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    
    )
}
