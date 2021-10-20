import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
