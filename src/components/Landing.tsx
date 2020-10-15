import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Landing = ({
  Logo,
  subtitle,
}: {
  Logo: React.FunctionComponent<{ size: number }>;
  subtitle: string;
}) => (
  <Grid container direction="column" alignItems="center">
    <Typography variant="h1">
      <Logo size={20} />
    </Typography>
    <Typography variant="subtitle1">
      <i>{subtitle}</i>
    </Typography>
  </Grid>
);

export default Landing;
