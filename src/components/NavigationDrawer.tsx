import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { isMobile } from "react-device-detect";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const width = 240;

const useStyles = makeStyles(() => ({
  drawer: {
    width,
    flexShrink: 0,
  },
  drawerPaper: {
    width,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const NavigationDrawer = ({ items }: { items: string[] }) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant={isMobile ? "persistent" : "permanent"}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {items.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
