import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import React, { useState, useCallback, useMemo } from "react";
import DataLoader from "./DataLoader";
import Items, { Item } from "./Items";

const PREFIX = "Queue";

const classes = {
  listItem: `${PREFIX}-listItem`,
  card: `${PREFIX}-card`,
  cardContent: `${PREFIX}-cardContent`,
  list: `${PREFIX}-list`,
};

const StyledCard = styled(Card)(({ theme }) => ({
  [`& .${classes.listItem}`]: {
    paddingRight: theme.spacing(12),
    borderTop: "1px solid gray",
  },

  [`&.${classes.card}`]: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  [`& .${classes.cardContent}`]: {
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

  [`& .${classes.list}`]: {
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
  mapper: (item: any, refresh: () => Promise<void>) => Omit<Item, "key">;
  filter?: (item: Item) => boolean;
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const loadAsync = useCallback(
    () => loadItems().then((items) => setItems(items)),
    [setItems]
  );

  const filteredItems = useMemo(
    () =>
      items
        .map((item, key) => ({ ...mapper(item, loadAsync), key }))
        .filter(filter),
    [items, filter, mapper, loadAsync]
  );
  return (
    <StyledCard className={classes.card}>
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
    </StyledCard>
  );
};

export default Queue;
