import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

const Body = ({
  children,
  ...rest
}: { children: React.ReactNode } & Omit<TypographyProps, "variant">) => (
  <Typography variant={"body1"} {...rest}>
    {children}
  </Typography>
);

export default Body;
