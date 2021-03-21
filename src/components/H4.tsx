import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

const H4: React.FunctionComponent<Omit<
  TypographyProps,
  "variant"
>> = React.forwardRef((props, ref) => (
  <Typography {...props} variant={"h4"} ref={ref} />
));

export default H4;
