import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

const H2: React.FunctionComponent<TypographyProps> = (props) => (
  <Typography {...props} variant={"h2"} />
);

export default H2;
