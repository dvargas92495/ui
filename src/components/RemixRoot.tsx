import React from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/server-runtime";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
// import Clerk from '@clerk/clerk-js';
// primary: "#3ba4dc",
// secondary: "#f8a94a",

export const getRootMeta = (
  tags: ReturnType<MetaFunction> = {}
): MetaFunction => () => {
  return {
    "og:type": "website",
    "twitter:card": "summary",
    "twitter:creator": "@dvargas92495",
    ...tags,
  };
};

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

export const RootCatchBoundary = ClerkCatchBoundary(() => {
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
});

// keeping this in case there is anything to add
type Props = {};

const App = () => {
  const data = useLoaderData<{ ENV: Record<string, string> }>();
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
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
  ClerkApp(() => <App {...props} />, {
    // @ts-ignore - Remove Clerk Hot loading
    // Clerk,
  })();

export default RemixRoot;
