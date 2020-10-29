import { Typography } from "@material-ui/core";
import React from "react";

const H4 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Typography variant={"h4"} className={className}>
    {children}
  </Typography>
);

export default H4;
