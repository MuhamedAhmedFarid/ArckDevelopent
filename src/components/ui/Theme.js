
import { createTheme } from "@material-ui/core"
const arcBlue =  "#0B72B9"
const arcOrange =  '#FFBA60'
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
        h4: {
            fontFamily: "Pacifico",
            fontWeight: "700",
            fontSize: "1.75rem",
            color: `${arcBlue}`,
            
        },
        
        estimate: {
            fontFamily: 'Pacifico',
            fontSize :"1rem", 
            textTransform: 'none',
            color: "white",
            borderRadius: '200px',
            backgroundColor:  "#FFBA60"
        }
    }
})