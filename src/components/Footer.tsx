import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { H6 } from "..";
import { BASE_PATH } from "./util";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <hr />
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Vargas Arts, LLC
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <H6>Site Links</H6>
          <Typography variant={"body2"} color="textSecondary">
            <Link href={`${BASE_PATH}terms-of-use`} color="inherit">
              Terms of Use
            </Link>
          </Typography>
          <Typography variant={"body2"} color="textSecondary">
            <Link href={`${BASE_PATH}privacy`} color="inherit">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
