import React from "react";
import AppBar from "./AppBar";
import Main from "./Main";
import Footer from "./Footer";
import Button from "./Button";
import ThemeProvider from "./ThemeProvider";
import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets";
import Root from "./Root";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const sheets = new ServerStyleSheets();

const Layout: React.FC<{ homeIcon?: React.ReactNode; pages?: string[] }> = ({
  children,
  pages = [],
  homeIcon = "Home",
}) => {
  return sheets.collect(
    <ClerkProvider frontendApi={process.env.CLERK_FRONTEND_API} authVersion={2}>
      <ThemeProvider>
        <Root>
          <AppBar
            homeIcon={homeIcon}
            userIcon={
              <>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Button
                    color={"primary"}
                    href={"/login"}
                    variant={"outlined"}
                    style={{ margin: "0 4px" }}
                  >
                    LOGIN
                  </Button>
                  <Button
                    color={"secondary"}
                    href={"/signup"}
                    variant={"outlined"}
                    style={{ marginLeft: 4, marginRight: 8 }}
                  >
                    SIGNUP
                  </Button>
                </SignedOut>
              </>
            }
            pages={pages}
          />
          <Main>{children}</Main>
          <Footer
            siteLinks={["About", "Terms of Use", "Privacy Policy", "Contact"]}
          />
        </Root>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export const LayoutHead = ({
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
      {sheets.getStyleElement()}
      {styles && <style>{styles}</style>}
    </>
  );
};

export default Layout;
