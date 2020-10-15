import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const BASE_PATH = `${process.env.APP_BASE_PATH || ""}/`;

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(0, 1),
  },
}));

const AppBar: React.FunctionComponent<{
  homeIcon: React.ReactNode;
  pages?: string[];
}> = ({ children, homeIcon, pages = [] }) => {
  const classes = useStyles();
  return (
    <MuiAppBar position="static" elevation={5} color="transparent">
      <Toolbar>
        <Typography variant="h4">
          <Link href={BASE_PATH}>{homeIcon}</Link>
        </Typography>
        <Grid container justify="center">
          {pages.map((p, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Divider orientation="vertical" flexItem />}
              <Typography variant="h6" color={"textPrimary"} className={classes.link}>
                <Link href={`${BASE_PATH}${p}`} color="inherit">
                  {p}
                </Link>
              </Typography>
            </React.Fragment>
          ))}
        </Grid>
        {children}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
