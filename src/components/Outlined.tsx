import Paper, { PaperProps } from "@mui/material/Paper";
import React from "react";

const Outlined = (props: Omit<PaperProps, "variant">) => (
  <Paper variant={"outlined"} {...props} />
);

export default Outlined;
