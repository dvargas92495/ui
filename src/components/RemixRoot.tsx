import React, { useMemo } from "react";
import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  useCatch,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import { ConnectClerk } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { CacheProvider } from "@emotion/react";
import getEmotionCache, { emotionCache } from "../utils/getEmotionCache";
import { APP_NAME } from "../utils/constants";
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

export const getRootMeta = (
  tags: ReturnType<MetaFunction> = {}
): MetaFunction => () => {
  return {
    title: APP_NAME,
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": "@dvargas92495",
    ...tags,
  };
};

export const getRootLoader = ({
  env = {},
}: { env?: Record<string, string | undefined> } = {}): LoaderFunction => (
  args
) =>
  rootAuthLoader(
    args,
    () => ({
      ENV: {
        API_URL: process.env.API_URL,
        CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
        HOST: process.env.HOST,
        NODE_ENV: process.env.NODE_ENV,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        ...env,
      },
    }),
    { loadUser: true }
  );

export const getRootLinks = (
  links: ReturnType<LinksFunction> = []
): LinksFunction => () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    },
    ...links,
  ];
};

export function RootCatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}

type Props = { themeProps?: ThemeOptions };

const App = ({ themeProps = {} }: Props) => {
  const data = useLoaderData<{ ENV: Record<string, string> }>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <CacheProvider
          value={
            typeof document === "undefined" ? emotionCache : getEmotionCache()
          }
        >
          <ThemeProvider {...themeProps}>
            <Outlet />
          </ThemeProvider>
        </CacheProvider>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = {
  env: ${JSON.stringify(data?.ENV || {})}
};`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

const RemixRoot = (props: Props) =>
  ConnectClerk(() => <App {...props} />, {
    frontendApi: process.env.CLERK_FRONTEND_API || "",
  })();

export default RemixRoot;
