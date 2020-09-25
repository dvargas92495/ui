import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const AppBar: React.FunctionComponent<{
  homeIcon: React.ReactNode;
  pages?: string[];
}> = ({ children, homeIcon, pages = [] }) => (
  <MuiAppBar position="static" elevation={5} color="transparent">
    <Toolbar>
      <Typography variant="h6">
        <Link href="/">{homeIcon}</Link>
      </Typography>
      {pages.map((p, i) => (
        <>
          {i > 0 && <Divider orientation="vertical" flexItem />}
          <Link href={`/${p}`}>{p}</Link>
        </>
      ))}
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
