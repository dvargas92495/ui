import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

const H4: React.FunctionComponent<Omit<TypographyProps, "variant">> = (
  props
) => <Typography variant={"h4"} {...props} />;

export default H4;
