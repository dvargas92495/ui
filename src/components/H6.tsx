import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

const H6: React.FunctionComponent<TypographyProps> = (props) => (
  <Typography {...props} variant={"h6"} />
);

export default H6;
