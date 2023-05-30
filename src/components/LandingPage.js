import React from "react";
// import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Button  from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ui/5.1 ButtonArrow";
import animationData from '../animations/automationAnimation/data.json'



// const useStyles = makeStyles(theme => ({

// }))

export default function LandingPage() {
    // const classes = useStyles()

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };

    

    return (
        <Grid container direction="column">
            <Grid item >
                <Grid container>
                    <Grid item >
                        <div>Bringing West coast Technology <br/> to the Medwest</div>
                        <Grid container>
                            <Grid item >
                                <Button veriant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item >
                                <Button veriant="outlined">Learn More <ButtonArrow/></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                    {/* <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    
    )
}
