import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

const H5: React.FunctionComponent<Omit<
  TypographyProps,
  "variant"
>> = React.forwardRef((props, ref) => (
  <Typography {...props} variant={"h5"} ref={ref} />
));

export default H5;
