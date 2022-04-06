import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/remix";
import { Outlet } from "@remix-run/react";

const Layout: React.FC<{
  homeIcon?: React.ReactNode;
  pages?: string[];
}> = ({ pages = [], homeIcon = "Home" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div style={{ position: "static", background: "transparent" }}>
        <div style={{ height: 64 }}>
          <a href={"/"} style={{ minWidth: "200px", display: "flex" }}>
            {homeIcon}
          </a>
          <div style={{ justifyContent: "center" }}>
            {pages.map((p, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div style={{ borderLeft: "1px solid #000" }} />}
                <h6 style={{ marginLeft: 8, marginRight: 8 }}>
                  <a
                    href={`/${p}`}
                    color="inherit"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {p}
                  </a>
                </h6>
              </React.Fragment>
            ))}
          </div>
          <div
            style={{
              minWidth: "200px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <a href={"/login"} style={{ margin: "0 4px" }}>
                LOGIN
              </a>
              <a href={"/signup"} style={{ marginLeft: 4, marginRight: 8 }}>
                SIGNUP
              </a>
            </SignedOut>
          </div>
        </div>
      </div>
      <main
        style={{
          marginTop: 64,
          marginBottom: 64,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          maxWidth: "760px",
          width: "100%",
          padding: 0,
          flexGrow: 1,
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          padding: "16px 24px",
          marginTop: "auto",
          background: "#f8a94a40",
        }}
      >
        <hr />
        <div style={{ display: "flex" }}>
          <div style={{ width: "33%" }}>
            <p>© {new Date().getFullYear()} Vargas Arts, LLC</p>
          </div>
          <div style={{ width: "67%" }}>
            <h6>Site Links</h6>
            {["About", "Terms of Use", "Privacy Policy", "Contact"].map(
              (l, i) => (
                <p key={i}>
                  <a
                    href={`/${l.toLowerCase().replace(/ /g, "-")}`}
                    color="inherit"
                  >
                    {l}
                  </a>
                </p>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
