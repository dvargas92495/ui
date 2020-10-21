import { Typography } from "@material-ui/core";
import React from "react";

const H6 = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"h6"}>{children}</Typography>
);

export default H6;
