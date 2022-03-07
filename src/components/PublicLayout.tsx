import React from "react";
import AppBar from "./AppBar";
import Main from "./Main";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Root from "./Root";
import { SignedIn, SignedOut, UserButton } from "@clerk/remix";
import { Outlet } from "remix";

const Layout: React.FC<{
  homeIcon?: React.ReactNode;
  pages?: string[];
}> = ({ pages = [], homeIcon = "Home" }) => {
  return (
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
      <Main><Outlet /></Main>
      <Footer
        siteLinks={["About", "Terms of Use", "Privacy Policy", "Contact"]}
      />
    </Root>
  );
};

export default Layout;
