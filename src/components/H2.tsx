import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

const H2: React.FunctionComponent<Omit<
  TypographyProps,
  "variant"
>> = React.forwardRef((props, ref) => (
  <Typography {...props} variant={"h2"} ref={ref} />
));

export default H2;
