import { orange, teal } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: orange[700],
    },
  },
});

const theme = responsiveFontSizes(baseTheme);


export default theme;
