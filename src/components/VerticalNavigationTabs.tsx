import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(-8),
    marginLeft: theme.spacing(-3),
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  tabs: {
    minWidth: theme.spacing(30),
    color: theme.palette.getContrastText(theme.palette.text.primary),
    backgroundColor: theme.palette.text.primary,
    flexGrow: 1,
  },
  tabPanel: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(0),
  },
  search: {
    backgroundColor: theme.palette.primary.main,
  },
  searchBar: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  },
}));

const VerticalNavigationTabs = ({
  items,
  label,
  children,
}: {
  items: { label: string; href: string }[];
  label: string;
  children: React.ReactNode;
}) => {
  const [value, setValue] = React.useState(
    items.findIndex((i) => i.label === label) || 0
  );
  const handleChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => setValue(newValue),
    [setValue]
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Paper variant="outlined" square className={classes.search}>
          <TextField
            label="Search Docs"
            variant="filled"
            className={classes.searchBar}
            fullWidth
            color={"secondary"}
          />
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
              href={item.href}
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
    </div>
  );
};

export default VerticalNavigationTabs;
