import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ui/5.1 ButtonArrow";
import animationData from '../animations/landinganimation/data'
import Typography from "@material-ui/core/Typography";
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileIcon from "../assets/mobileIcon.svg"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import revolutionBackground from '../assets/repeatingBackground.svg'

import infoBackground from '../assets/infoBackground.svg'

import websitesIcon from '../assets/websiteIcon.svg'
import CallToAction from "./ui/CallToaction";
const useStyles = makeStyles(theme => ({
    animation: {
        minWidth: "21em",
        maxWidth: "50em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
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
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        },
    },
    learnButtonHero: {
        border: `1px solid ${theme.palette.common.arcBlue}`,
        color: theme.palette.common.arcBlue,
        // borderWidth: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        height: "45px",
        width: '145px',
        fontSize: '0.9',
       
    },
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
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem"
        }
    },
    textContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.arcOrange
    },
    icon: {
        marginLeft: "2rem",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }

    },
    serviseContainer: {
        marginTop: '12em',
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: ' cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down("sm")]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            with: '100%'
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: '100%',
     
    

    },
    // infoText: {
    //     position : "absolute"
    // },

}))

export default function LandingPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };



    return (
        <Grid container direction="column" >
            <Grid item > //hero block
                <Grid container justify="flex-end" alignItems="center">
                    <Grid sm item className={classes.textContainer} >

                        <Typography align="center" variant="h2">Bringing West coast Technology <br /> to the Medwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item >
                                <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} className={classes.estimteButton}
                                    veriant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item >
                                <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} className={classes.learnButtonHero} veriant="outlined"><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Grid container direction="row" className={classes.serviseContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custtom Software Developent
                        </Typography>
                        <Typography variant="subtitle1">
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investgations to {""} <span className={classes.specialText}>  celebration</span>
                        </Typography>
                        <Button component={Link} to="/customesoftware" onClick={() => {props.setValue(1); props.setSelcted(1)}} className={classes.learnButton} veriant="outlined"><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} /></Button>
                    </Grid>
                    <Grid item justify="center" alignItems="center">
                        <img className={classes.icon} src={customSoftwareIcon} />

                    </Grid>
                </Grid>

            </Grid>



            <Grid item >
                <Grid container direction="row" className={classes.serviseContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            iOS/Android App devices
                        </Typography>
                        <Typography variant="subtitle1">
                            Extend Functionality.Extend Acess. Increase Engaigment.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experince or create a standlone {matchesSM ? null : <br />} with either mobile platform
                        </Typography>
                        <Button component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelcted(2)}} className={classes.learnButton} veriant="outlined"><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} /></Button>
                    </Grid>
                    <Grid item justify="center" alignItems="center" style={{ marginRight: '5em' }}>
                        <img className={classes.icon} src={mobileIcon} />


                    </Grid>
                </Grid>
            </Grid>



            <Grid item >
                <Grid container direction="row" className={classes.serviseContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Website Developent
                        </Typography>
                        <Typography variant="subtitle1">
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Engines, built for speed.
                        </Typography>
                        <Button component={Link} to="/websites" onClick={() => {props.setValue(1); props.setSelcted(3)}} className={classes.learnButton} veriant="outlined"><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} /></Button>
                    </Grid>
                    <Grid item justify="center" alignItems="center">
                        <img className={classes.icon} src={websitesIcon} />

                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container style={{ height: '100em', marginTop: '12em' }} justify="center" alignItems="center" >
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" item style={{ textAlign: 'center' }}>
                                <Grid >
                                    <Typography variant="h3" gutterBottom >The Revolution</Typography>
                                </Grid>
                                <Grid item >
                                    <Typography variant="subtitle1">
                                        Visionary inights cuopled cutting-adge techolgy is a  reccipe for revolution
                                    </Typography>
                                    <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} className={classes.learnButtonHero} veriant="outlined"><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} /></Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>




            <Grid item >
                <Grid container style={{ height: '100em' }} direction="row" alignItems="center">

                    <Grid item container style={{position: "absolute", textAlign: matchesXS ? "center" : "inherit"}} direction={matchesXS ? "column" : "row"} spacing={matchesXS ? 10 : 0}>
                    <Grid sm item className={classes.infoText} style={{  marginLeft: matchesXS ? 0 : matchesSM ? "2em" : '5em' }}  >
                        <Grid container direction="column">
                            <Typography variant="h2" style={{ color: 'white' }}>
                                About US
                            </Typography>
                            <Typography variant="subtitle2">
                                Let's get personal.
                            </Typography>
                            <Grid item>
                                <Button component={Link} to="/about" onClick={() => props.setValue(3)} className={classes.learnButton} veriant="outlined" style={{ color: 'white', borderColor: "white" }}><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill='white' /></Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item sm className={classes.infoText} style={{  marginRight: matchesXS ? 0 :  matchesSM ? "2em " : '5em',  textAlign: matchesXS ? "center" : 'right'  }}  >
                        <Grid container direction="column">
                            <Typography variant="h2" style={{ color: 'white' }}>
                                Contact US
                            </Typography>
                            <Typography variant="subtitle2">
                                Say Hello
                            </Typography>
                            <Grid item>
                                <Button component={Link} to="/contact" onClick={() => props.setValue(4)} className={classes.learnButton} veriant="outlined" style={{ color: 'white', borderColor: "white" }}><span style={{ marginRight: 10 }}>Learn More</span> <ButtonArrow width={15} height={15} fill='white' /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                    
                    <div className={classes.infoBackground} />
                </Grid>
            </Grid>





            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>


    )
}
