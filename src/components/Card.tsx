import React from "react";
import MuiCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const Card: React.FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <MuiCard>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
