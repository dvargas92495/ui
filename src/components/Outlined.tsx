import Paper from "@material-ui/core/Paper";
import React from "react";

const Outlined = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <Paper variant={"outlined"} className={className}>
    {children}
  </Paper>
);

export default Outlined;
