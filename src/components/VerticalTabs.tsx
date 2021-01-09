import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import H4 from "./H4";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  tabPanel: {
    paddingLeft: theme.spacing(2),
    width: "100%",
  },
  /*
  tabsContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: theme.spacing(34),
  },
  tabs: {
    color: theme.palette.getContrastText(theme.palette.text.primary),
    backgroundColor: theme.palette.text.primary,
    flexGrow: 1,
  },
  titleContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    marginBottom: 0,
  },*/
}));

const VerticalTabs = ({
  children,
  title,
}: {
  children: React.ReactElement<{ label: string }>[];
  title: React.ReactNode;
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => setValue(newValue),
    [setValue]
  );
  const classes = useStyles();
  const items = children.map((c) => c.props.label);

  return (
    <div className={classes.root}>
      <Paper variant="elevation" square>
        <H4>{title}</H4>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical Tabs"
        >
          {items.map((item, i) => (
            <Tab
              key={i}
              label={item}
              id={`vert-tab-${i}`}
              aria-controls={`vert-tabpanel-${i}`}
            />
          ))}
        </Tabs>
      </Paper>
      <div
        role="tabpanel"
        id={`vert-tabpanel-${value}`}
        aria-labelledby={`vert-tab-${value}`}
        className={classes.tabPanel}
      >
        {children[value]}
      </div>
    </div>
  );
};

export default VerticalTabs;
