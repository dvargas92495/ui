import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState, useCallback } from "react";
import DataLoader from "./DataLoader";

type QueueItem = {
  avatar: React.ReactElement;
  primary: React.ReactNode;
  action: React.ReactElement;
};

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingRight: theme.spacing(12),
    height: theme.spacing(20),
  },
  card: {
    height: "100%",
  },
  cardContent: {
    overflowY: "scroll",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: theme.spacing(0.5),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const Queue = ({
  title,
  loadItems,
}: {
  title: string;
  loadItems: () => Promise<QueueItem[]>;
}) => {
  const [items, setItems] = useState<QueueItem[]>([]);
  const loadAsync = useCallback(() => loadItems().then(setItems), [setItems]);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent className={classes.cardContent}>
        <DataLoader loadAsync={loadAsync}>
          <List>
            {items.map((item, i) => (
              <ListItem key={i} className={classes.listItem}>
                <ListItemAvatar>{item.avatar}</ListItemAvatar>
                <ListItemText primary={item.primary} />
                <ListItemSecondaryAction>{item.action}</ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DataLoader>
      </CardContent>
    </Card>
  );
};

export default Queue;
