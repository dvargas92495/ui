import { Typography, TypographyProps } from "@mui/material";
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
    <Typography
      variant={"body1"}
      className={className || htmlClass}
      sx={{ margin: "1em 0", ...props.sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Body;
