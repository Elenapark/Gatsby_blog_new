import { createTheme } from "@mui/material/styles";
import { teal, deepOrange } from "@mui/material/colors";
import EulyooRegular from "./fonts/Eulyoo1945-Regular.woff2";
import EulyooSemiBold from "./fonts/Eulyoo1945-SemiBold.woff2";

const theme = createTheme({
  palette: {
    primary: {
      light: teal[200],
      main: teal[500],
      dark: teal[900],
    },
    secondary: {
      light: deepOrange[200],
      main: deepOrange[500],
      dark: deepOrange[900],
    },
  },
  typography: {
    fontFamily: ["Eulyoo1945", "serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
            font-family:'Eulyoo1945';
            font-style: normal;
            font-weight: Regular;
            src: url(${EulyooRegular}) format('woff2');
        }
        @font-face {
            font-family:'Eulyoo1945';
            font-style: normal;
            font-weight: Semi Bold;
            src: url(${EulyooSemiBold}) format('woff2');
            }
        `,
    },
  },
});

export default theme;
