import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Button  from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ui/5.1 ButtonArrow";
import animationData from '../animations/landinganimation/data'
import  Typography  from "@material-ui/core/Typography";



const useStyles = makeStyles(theme => ({

}))

export default function LandingPage() {
    const classes = useStyles()

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
            <Grid item >
                <Grid container justify="flex-end" alignItems="center">
                    <Grid item >
                        <Typography align="center" variant="h2">Bringing West coast Technology <br/> to the Medwest</Typography>
                        <Grid container>
                            <Grid item >
                                <Button veriant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item >
                                <Button veriant="outlined">Learn More <ButtonArrow width={15} height={15} fill="red"/></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    
    )
}
