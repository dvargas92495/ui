import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { isMobile } from "react-device-detect";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const width = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width,
    flexShrink: 0,
    zIndex: theme.zIndex.appBar - 1,
  },
  drawerPaper: {
    width,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    paddingLeft: width,
  },
}));

const NavigationDrawer = ({
  items,
  children,
}: {
  items: string[];
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant={isMobile ? "persistent" : "permanent"}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        PaperProps={{
          variant: "outlined",
        }}
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
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default NavigationDrawer;
