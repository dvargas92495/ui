import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const primaryMain = "#3BA4DC";
const secondaryMain = "#F7941D";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    text: {
      primary: "#333333",
      secondary: "#888888",
    },
    divider: "#333333",
  },
  typography: {
    fontFamily: ["Avenir Light"].join(","),
    h1: {
      fontSize: "4.5rem",
    },
    h2: {
      marginBlockEnd: "0.42em",
    },
    h3: {
      marginBlockEnd: "0.5em",
    },
    h4: {
      marginBlockEnd: "0.67em",
    },
    h6: {
      marginBottom: 24,
    },
    subtitle1: {
      fontSize: "1.25em",
      fontFamily: ["Century Gothic"].join(","),
    },
    body1: {
      fontFamily: ["Century Gothic"].join(","),
      marginBottom: 24,
    },
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        marginBottom: 0,
      },
    },
  },
});

const ThemeProvider: React.FunctionComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
