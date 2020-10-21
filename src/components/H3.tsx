import { Typography } from "@material-ui/core";
import React from "react";

const H3 = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"h3"}>{children}</Typography>
);

export default H3;
