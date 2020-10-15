import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const Main = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"} component={"main"} className={classes.main}>
      <>{children}</>
    </Container>
  );
};

export default Main;
