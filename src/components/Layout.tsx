import React from "react";
import AppBar from "./AppBar";
import Main from "./Main";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Root from "./Root";
import Document from "./Document";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import type { ThemeProviderProps } from "./ThemeProvider";

const Layout: React.FC<{
  homeIcon?: React.ReactNode;
  pages?: string[];
  themeProps?: ThemeProviderProps;
}> = ({ children, pages = [], homeIcon = "Home", themeProps }) => {
  return (
    <Document themeProps={themeProps}>
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
    </Document>
  );
};

export default Layout;
