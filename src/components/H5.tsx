import { Typography } from "@material-ui/core";
import React from "react";

const H5 = ({ children }: { children: React.ReactNode }) => (
  <Typography variant={"h5"}>{children}</Typography>
);

export default H5;
