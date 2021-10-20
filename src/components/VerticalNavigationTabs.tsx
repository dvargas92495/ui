import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import H4 from "./H4";

const PREFIX = "VerticalNavigationTabs";

const classes = {
  root: `${PREFIX}-root`,
  tabsContainer: `${PREFIX}-tabsContainer`,
  tabs: `${PREFIX}-tabs`,
  tabPanel: `${PREFIX}-tabPanel`,
  titleContainer: `${PREFIX}-titleContainer`,
  title: `${PREFIX}-title`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: "100%",
    marginTop: theme.spacing(-8),
    display: "flex",
  },

  [`& .${classes.tabsContainer}`]: {
    display: "flex",
    flexDirection: "column",
    minWidth: theme.spacing(34),
  },

  [`& .${classes.tabs}`]: {
    color: theme.palette.getContrastText(theme.palette.text.primary),
    backgroundColor: theme.palette.text.primary,
    flexGrow: 1,
    alignItems: "center",
  },

  [`& .${classes.tabPanel}`]: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(0),
    maxWidth: theme.spacing(100),
  },

  [`& .${classes.titleContainer}`]: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },

  [`& .${classes.title}`]: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    margin: 0,
  },
}));

const VerticalNavigationTabs = ({
  items,
  label,
  children,
  title,
}: {
  items: { label: string; href: string }[];
  label: string;
  children: React.ReactNode;
  title: string;
}) => {
  const [value, setValue] = React.useState(
    Math.max(
      items.findIndex((i) => i.label === label),
      0
    )
  );
  const handleChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => setValue(newValue),
    [setValue]
  );

  return (
    <Root className={classes.root}>
      <div className={classes.tabsContainer}>
        <Paper variant="outlined" square className={classes.titleContainer}>
          <H4 className={classes.title}>{title}</H4>
        </Paper>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical Navigation Tabs"
          className={classes.tabs}
        >
          {items.map((item, i) => (
            <Tab
              key={i}
              label={item.label}
              href={`/${item.href}`}
              id={`nav-tab-${i}`}
              aria-controls={`nav-tabpanel-${i}`}
            />
          ))}
        </Tabs>
      </div>
      <div
        role="tabpanel"
        id={`nav-tabpanel-${value}`}
        aria-labelledby={`nav-tab-${value}`}
        className={classes.tabPanel}
      >
        {children}
      </div>
    </Root>
  );
};

export default VerticalNavigationTabs;
