import ListItem from "@material-ui/core/ListItem";
import React from "react";

const LI: React.FunctionComponent<typeof ListItem> = (props) => (
  <ListItem {...props} />
);

export default LI;
