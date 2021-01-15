import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    //TODO: Color main of project
    color: {
        primary: "#3f51b5",
        secondary: "#00BCD4",
        error: "#E64A19",
        textColor: '#ffffff',
        defaultTextColor: '#00000',
        hover: 'rgba(0,0,0,0.08)'
    },
    //font 
    typography: {
        fontFamily: "Roboto"
    }
})

export default theme