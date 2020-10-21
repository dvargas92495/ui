import Paper from "@material-ui/core/Paper";
import React from "react";

const Outlined = ({ children }: { children: React.ReactNode }) => (
  <Paper variant={"outlined"}>{children}</Paper>
);

export default Outlined;
