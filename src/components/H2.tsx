import { Typography } from "@material-ui/core";
import React from "react";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"h2"}>{children}</Typography>
);

export default H2;
