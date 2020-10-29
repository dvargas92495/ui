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
    h2: {
      marginBlockEnd: '0.83em',
    },
    h3: {
      marginBlockEnd: '1em',
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
});

const ThemeProvider: React.FunctionComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
