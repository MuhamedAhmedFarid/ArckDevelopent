
import { createTheme } from "@material-ui/core"
const arcBlue =  "#0B72B9"
const arcOrange =  '#FFBA60'
const arcGray = '#868686'
export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}` ,
            arcOrange: `${arcOrange}`
            
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main : `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: '1rem',
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "2.5rem",
            color: `${arcBlue}`,
            lineHeight: "1,5rem"
        },
        h3 : {
            fontFamily: 'Pacifico',
            fontSize: '2.5rem',
            color: arcBlue
        },
        h4: {
            fontFamily: "Releway",
            fontWeight: "700",
            fontSize: "1.75rem",
            color: `${arcBlue}`,
            
            
        },
        subtitle1: {
            fontSize: "1.2rem",
            fontWeight: 300,
            color: `${arcGray}`
        },
        subtitle2: {
           color: 'white',
           fontSize: '1.25rem',
           fontWeight: 300 
        },
        // learnButton: {
        //     borderColor: arcBlue,
        //     color: arcBlue,
        //     borderWidth: 2,
        //     textTransform: "none",
        //     borderRadius: 50,
        //     fontFamily: "Roboto",
        //     fontWeight: "bold",
        // }
        
        estimate: {
            fontFamily: 'Pacifico',
            fontSize :"1rem", 
            textTransform: 'none',
            color: "white",
            // borderRadius: '200px',
            backgroundColor:  "#FFBA60",
        }
    }
})