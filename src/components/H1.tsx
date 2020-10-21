import { Typography } from "@material-ui/core";
import React from "react";

const H1 = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"h1"}>{children}</Typography>
);

export default H1;
