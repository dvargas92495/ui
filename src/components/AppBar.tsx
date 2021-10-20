import React from "react";
import styled from '@mui/material/styles/styled';
import MuiAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const PREFIX = 'AppBar';

const classes = {
  link: `${PREFIX}-link`,
  home: `${PREFIX}-home`
};

const StyledMuiAppBar = styled(MuiAppBar)((
  {
    theme
  }
) => ({
  [`& .${classes.link}`]: {
    margin: theme.spacing(0, 1),
  },

  [`& .${classes.home}`]: {
    maxWidth: theme.spacing(10.5),
  }
}));

const AppBar: React.FunctionComponent<{
  homeIcon: React.ReactNode;
  userIcon: React.ReactNode;
  pages?: string[];
}> = ({ children, homeIcon, pages = [], userIcon }) => {

  return (
    <StyledMuiAppBar position="static" elevation={5} color="transparent">
      <Toolbar>
        <Link href={"/"} className={classes.home}>
          {homeIcon}
        </Link>
        <Grid container justifyContent="center">
          {pages.map((p, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Divider orientation="vertical" flexItem />}
              <Typography
                variant={"subtitle1"}
                color={"textPrimary"}
                className={classes.link}
              >
                <Link href={`/${p}`} color="inherit">
                  {p}
                </Link>
              </Typography>
            </React.Fragment>
          ))}
        </Grid>
        {children}
        {userIcon}
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default AppBar;
