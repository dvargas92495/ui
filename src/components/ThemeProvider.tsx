import React, { useMemo } from "react";
import createTheme, { ThemeOptions } from "@mui/material/styles/createTheme";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

const ThemeProvider: React.FC<ThemeOptions> = ({ children, ...options }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#3ba4dc",
          },
          secondary: {
            main: "#f8a94a",
          },
          text: {
            primary: "#333333",
            secondary: "#888888",
          },
          divider: "#333333",
          ...options.palette,
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
          ...options.typography,
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
          ...options.components,
        },
        ...options,
      }),
    []
  );
  const inputGlobalStyles = useMemo(
    () =>
      options.palette?.background?.default ? (
        <GlobalStyles
          styles={{
            body: { background: options.palette?.background?.default },
          }}
        />
      ) : null,
    [options.palette?.background?.default]
  );
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {inputGlobalStyles}
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
