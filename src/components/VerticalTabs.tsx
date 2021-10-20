import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import H6 from "./H6";

const PREFIX = "VerticalTabs";

const classes = {
  root: `${PREFIX}-root`,
  tabPanel: `${PREFIX}-tabPanel`,
  title: `${PREFIX}-title`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: "100%",
    display: "flex",
  },

  [`& .${classes.tabPanel}`]: {
    paddingLeft: theme.spacing(2),
    width: "100%",
  },

  [`& .${classes.title}`]: {
    marginTop: theme.spacing(2),
    marginBottom: 0,
    opacity: 0.7,
    textAlign: "center",
  },
}));

const VerticalTabs = ({
  children,
  title,
  initialValue = 0,
}: {
  children: React.ReactElement<{ title: string }>[];
  title: React.ReactNode;
  initialValue?: number;
}) => {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => setValue(newValue),
    [setValue]
  );

  const items = children.map((c) => c.props.title);

  return (
    <Root className={classes.root}>
      <Paper variant="elevation" square>
        <H6 className={classes.title}>{title}</H6>
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
    </Root>
  );
};

export default VerticalTabs;
