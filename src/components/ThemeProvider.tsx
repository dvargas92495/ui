import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3BA4DC',
      },
      secondary: {
        main: '#F7941D',
      },
    },
    typography: {
      fontFamily: [
        'Century Gothic',
        'Avenir Light',
      ].join(','),
    },
  });
  

const ThemeProvider: React.FunctionComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
