import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

const primaryMain = "#3BA4DC";
const secondaryMain = "#F7941D";

const theme = createTheme({
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
    fontFamily: ["Avenir Light", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
      fontSize: "3rem",
      fontWeight: 600,
      margin: "3rem 0",
    },
    h2: {
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "2.5rem",
      margin: "2.5rem 0",
    },
    h3: {
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "2rem",
      margin: "2rem 0",
    },
    h4: {
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "1.75rem",
      margin: "1.75rem 0",
    },
    h5: {
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
      fontWeight: 600,
      margin: "1.5rem 0",
    },
    h6: {
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
      fontWeight: 600,
      margin: "1.25rem 0",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontFamily: ["Century Gothic", "sans-serif"].join(","),
    },
  },
  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        subheader: {
          margin: 0,
        },
        title: {
          margin: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          minWidth: 400,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          "& h2": {
            margin: 0,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          margin: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "list-item",
          fontSize: 16,
          "& .MuiTypography-root": {
            margin: 0,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          margin: 0,
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
