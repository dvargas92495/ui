import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export type Item = {
  avatar: React.ReactElement;
  primary: React.ReactNode;
  action: React.ReactElement;
  secondary: React.ReactNode;
  key: number;
};

const Items = ({
  items,
  listClassName,
  itemClassName,
}: {
  items: Item[];
  listClassName?: string;
  itemClassName?: string;
}) => (
  <List className={listClassName}>
    {items.map((item) => (
      <ListItem key={item.key} className={itemClassName}>
        <ListItemAvatar>{item.avatar}</ListItemAvatar>
        <ListItemText primary={item.primary} secondary={item.secondary} />
        <ListItemSecondaryAction>{item.action}</ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default Items;
