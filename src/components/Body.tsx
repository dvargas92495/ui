import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

const Body = ({
  children,
  ...rest
}: { children: React.ReactNode; class?: string } & Omit<
  TypographyProps,
  "variant"
>) => {
  const { ["class"]: htmlClass, className, ...props } = rest;
  return (
    <Typography variant={"body1"} className={className || htmlClass} {...props}>
      {children}
    </Typography>
  );
};

export default Body;
