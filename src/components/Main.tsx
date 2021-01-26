import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    display: "flex",
    justifyContent: "center",
    width: '100%',
    padding: 0,
    flexGrow: 1,
  },
}));

const Main = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return <main className={classes.main}>{children}</main>;
};

export default Main;
