import React from "react";
import MuiCard, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const Card: React.FunctionComponent<{ title: string } & CardProps> = ({
  title,
  children,
  ...cardProps
}) => {
  return (
    <MuiCard {...cardProps}>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
