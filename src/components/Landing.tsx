import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() => ({
  logoContainer: {
    width: "100%",
    textAlign: 'center',
  },
}));

const Landing = ({
  Logo,
  subtitle,
}: {
  Logo: React.FunctionComponent;
  subtitle: string;
}) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h1" className={classes.logoContainer}>
        <Logo />
      </Typography>
      <Typography variant="subtitle1">
        <i>{subtitle}</i>
      </Typography>
    </Grid>
  );
};

export default Landing;
