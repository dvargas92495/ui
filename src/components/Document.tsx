import React from "react";
import ThemeProvider from "./ThemeProvider";
import { ClerkProvider } from "@clerk/clerk-react";

const Document: React.FC<{ themeProps?: Parameters<typeof ThemeProvider>[0] }> = ({
  children,
  themeProps,
}) => {
  return (
    <ClerkProvider frontendApi={process.env.CLERK_FRONTEND_API} authVersion={2}>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </ClerkProvider>
  );
};

export const Head = ({
  title,
  description = title,
  img,
  styles,
}: {
  title: string;
  description?: string;
  img?: string;
  styles?: string;
}): React.ReactElement => {
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={"summary"} />
      <meta name="twitter:creator" content="@dvargas92495" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="og:image" content={img} />
      <meta name="twitter:image" content={img} />
      {styles && <style>{styles}</style>}
    </>
  );
};

export default Document;
