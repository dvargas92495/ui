import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import Body from "./Body";

export type Item = {
  avatar?: React.ReactElement;
  primary: React.ReactNode;
  action?: React.ReactElement;
  secondary?: React.ReactNode;
  key: number | string;
};

const Items = ({
  items,
  listClassName,
  itemClassName,
  noItemMessage = "No Results",
}: {
  items: Item[];
  listClassName?: string;
  itemClassName?: string;
  noItemMessage?: string;
}) =>
  items.length ? (
    <List className={listClassName}>
      {items.map((item) => (
        <ListItem key={item.key} className={itemClassName}>
          {item.avatar && <ListItemAvatar>{item.avatar}</ListItemAvatar>}
          <ListItemText primary={item.primary} secondary={item.secondary} />
          <ListItemSecondaryAction>{item.action}</ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  ) : noItemMessage ? (
    <Body>{noItemMessage}</Body>
  ) : (
    <></>
  );

export default Items;
