import Paper, { PaperProps } from "@material-ui/core/Paper";
import React from "react";

const Outlined = (props: Omit<PaperProps, "variant">) => (
  <Paper variant={"outlined"} {...props} />
);

export default Outlined;
