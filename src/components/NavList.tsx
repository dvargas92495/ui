import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

const NavList = ({
  items,
  label,
}: {
  items: {
    href: string;
    icon: React.ReactNode;
    primary: React.ReactNode;
    secondary: React.ReactNode;
  }[];
  label: string;
}) => (
  <List component="nav" aria-label={label.toLowerCase()}>
    {items.map((item, i) => (
      <ListItem key={i} button component="a" href={item.href}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.primary} secondary={item.secondary} />
      </ListItem>
    ))}
  </List>
);

export default NavList;
