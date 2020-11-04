import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useState, useCallback } from "react";
import DataLoader from "./DataLoader";

type QueueItem = {
  avatar: React.ReactElement;
  primary: React.ReactNode;
  secondary: React.ReactNode;
  action: React.ReactElement;
};

const Queue = ({
  title,
  loadItems,
}: {
  title: string;
  loadItems: () => Promise<QueueItem[]>;
}) => {
  const [items, setItems] = useState<QueueItem[]>([]);
  const loadAsync = useCallback(() => loadItems().then(setItems), [setItems]);
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <List>
          <DataLoader loadAsync={loadAsync}>
            {items.map((item) => (
              <ListItem>
                <ListItemAvatar>{item.avatar}</ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
                <ListItemSecondaryAction>
                  {item.action}
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </DataLoader>
        </List>
      </CardContent>
    </Card>
  );
};

export default Queue;
