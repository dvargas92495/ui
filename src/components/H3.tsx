import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

const H3: React.FunctionComponent<Omit<
  TypographyProps,
  "variant"
>> = React.forwardRef((props, ref) => (
  <Typography {...props} variant={"h3"} ref={ref} />
));

export default H3;
