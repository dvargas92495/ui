import styled from "@mui/material/styles/styled";
import React from "react";

const PREFIX = "Main";

const classes = {
  main: `${PREFIX}-main`,
};

const Root = styled("main")(({ theme }) => ({
  [`&.${classes.main}`]: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    marginLeft: 0,
    marginRight: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 0,
    flexGrow: 1,
  },
}));

const Main = ({ children }: { children: React.ReactNode }) => {
  return <Root className={classes.main}>{children}</Root>;
};

export default Main;
