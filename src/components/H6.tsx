import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

const H6: React.FunctionComponent<Omit<
  TypographyProps,
  "variant"
>> = React.forwardRef((props, ref) => (
  <Typography {...props} variant={"h6"} ref={ref} />
));

export default H6;
