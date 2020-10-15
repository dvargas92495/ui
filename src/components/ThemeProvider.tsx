import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3BA4DC",
    },
    secondary: {
      main: "#F7941D",
    },
    text: {
      primary: "#333333",
      secondary: "#888888",
    },
    divider: "#333333",
  },
  typography: {
    fontFamily: ["Century Gothic"].join(","),
    subtitle1: {
      fontSize: "1.25em",
    },
    body1: {
      fontFamily: ["Avenir Light"].join(","),
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
