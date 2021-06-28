import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

const Subtitle = ({
  children,
  ...props
}: { children: React.ReactNode } & TypographyProps) => (
  <Typography variant={"subtitle1"} {...props}>
    {children}
  </Typography>
);

export default Subtitle;
