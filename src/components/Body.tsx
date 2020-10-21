import { Typography } from "@material-ui/core";
import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"body1"}>{children}</Typography>
);

export default Body;
