import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const AppBar: React.FunctionComponent<{
  homeIcon: React.ReactNode;
  pages?: string[];
}> = ({ children, homeIcon, pages = [] }) => (
  <MuiAppBar position="static" elevation={5} color="transparent">
    <Toolbar>
      <Typography variant="h4">
        <Link href="/">{homeIcon}</Link>
      </Typography>
      <Grid container justify="center">
        {pages.map((p, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Divider orientation="vertical" flexItem />}
            <Box mx={1}>
              <Typography variant="h6" color={"textPrimary"}>
                <Link href={`/${p}`} color="inherit">
                  {p}
                </Link>
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Grid>
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
