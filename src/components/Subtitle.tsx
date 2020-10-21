import { Typography } from "@material-ui/core";
import React from "react";

const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"subtitle1"}>{children}</Typography>
);

export default Subtitle;
