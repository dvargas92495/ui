import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Link from "@mui/material/Link";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import H6 from "./H6";

const PREFIX = "Footer";

const classes = {
  footer: `${PREFIX}-footer`,
};

const Root = styled("footer")(({ theme }) => ({
  [`&.${classes.footer}`]: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    background: alpha(theme.palette.secondary.light, 0.25),
  },
}));

const Footer = ({ siteLinks }: { siteLinks: string[] }) => {
  return (
    <Root className={classes.footer}>
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
              <Link
                href={`/${l.toLowerCase().replace(/ /g, "-")}`}
                color="inherit"
              >
                {l}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Root>
  );
};

export default Footer;
