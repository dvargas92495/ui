import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const Root = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Root;
