import React from "react";
import MuiCard, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

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
