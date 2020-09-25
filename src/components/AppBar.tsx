import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const AppBar : React.FunctionComponent<{
  homeIcon: React.ReactNode
}> = ({ children, homeIcon }) => (
  <MuiAppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        <Link href="/">{homeIcon}</Link>
      </Typography>
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
