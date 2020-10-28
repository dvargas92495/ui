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
    subtitle1: {
      fontSize: "1.25em",
      fontFamily: ["Century Gothic"].join(","),
    },
    body1: {
      fontFamily: ["Century Gothic"].join(","),
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "span.token.dom.variable": {
          color: primaryMain,
        },
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
