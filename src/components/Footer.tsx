import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import H6 from "./H6";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    background: fade(theme.palette.secondary.light, 0.25),
  },
}));

const Footer = ({ siteLinks }: { siteLinks: string[] }) => {
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
          {siteLinks.map((l, i) => (
            <Typography variant={"body2"} color="textSecondary" key={i}>
              <Link href={`/${l.toLowerCase().replace(/ /g, '-')}`} color="inherit">
                {l}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
