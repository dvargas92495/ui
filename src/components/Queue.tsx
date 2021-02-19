import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState, useCallback, useMemo } from "react";
import DataLoader from "./DataLoader";
import Items, { Item } from "./Items";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingRight: theme.spacing(12),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
    overflowY: "scroll",
    padding: 0,
    "&::-webkit-scrollbar": {
      width: theme.spacing(0.5),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  list: {
    padding: 0,
  },
}));

const Queue = ({
  title,
  subheader,
  loadItems,
  mapper,
  filter = () => true,
}: {
  title: string;
  subheader: React.ReactNode;
  loadItems: () => Promise<any[]>;
  mapper: (item: any) => Item;
  filter?: (item: Item) => boolean;
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const loadAsync = useCallback(
    () => loadItems().then((items) => setItems(items)),
    [setItems]
  );
  const classes = useStyles();
  const filteredItems = useMemo(
    () => items.map((item, key) => ({ ...mapper(item), key })).filter(filter),
    [items, filter, mapper]
  );
  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent className={classes.cardContent}>
        <DataLoader loadAsync={loadAsync}>
          <Items
            items={filteredItems}
            listClassName={classes.list}
            itemClassName={classes.listItem}
          />
        </DataLoader>
      </CardContent>
    </Card>
  );
};

export default Queue;
