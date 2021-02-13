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
      fontFamily: ["Century Gothic"].join(","),
      fontSize: "3rem",
      fontWeight: 600,
      margin: "3rem 0",
    },
    h2: {
      fontFamily: ["Century Gothic"].join(","),
      fontWeight: 600,
      fontSize: "2.5rem",
      margin: "2.5rem 0",
    },
    h3: {
      fontFamily: ["Century Gothic"].join(","),
      fontWeight: 600,
      fontSize: "2rem",
      margin: "2rem 0",
    },
    h4: {
      fontFamily: ["Century Gothic"].join(","),
      fontWeight: 600,
      fontSize: "1.75rem",
      margin: "1.75rem 0",
    },
    h5: {
      fontFamily: ["Century Gothic"].join(","),
      fontWeight: 600,
      margin: "1.5rem 0",
    },
    h6: {
      fontFamily: ["Century Gothic"].join(","),
      fontWeight: 600,
      margin: "1.25rem 0",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontFamily: ["Century Gothic"].join(","),
    },
    body1: {
      margin: "1em 0",
    },
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        marginBottom: 0,
      },
    },
    MuiInputLabel: {
      root: {
        margin: 0,
      },
    },
    MuiCardHeader: {
      subheader: {
        margin: 0,
      },
      title: {
        margin: 0,
      },
    },
    MuiInputBase: {
      root: {
        marginBottom: 0,
      },
    },
    MuiButton: {
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
