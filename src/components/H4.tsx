import { Typography } from "@material-ui/core";
import React from "react";

const H4 = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"h4"}>{children}</Typography>
);

export default H4;
