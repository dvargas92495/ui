import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

const H1: React.FunctionComponent<Omit<
  TypographyProps,
  "variant"
>> = React.forwardRef((props, ref) => (
  <Typography {...props} variant={"h1"} ref={ref} />
));

export default H1;
