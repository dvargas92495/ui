import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import H4 from "./H4";

const VerticalTabs = ({
  items,
  children,
  title,
}: {
  items: string[];
  children: React.ReactNodeArray;
  title: React.ReactNode;
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => setValue(newValue),
    [setValue]
  );

  return (
    <div>
      <div>
        <Paper variant="outlined" square>
          <H4>{title}</H4>
        </Paper>
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
              aria-controls={`nav-tabpanel-${i}`}
            />
          ))}
        </Tabs>
      </div>
      <div
        role="tabpanel"
        id={`vert-tabpanel-${value}`}
        aria-labelledby={`vert-tab-${value}`}
      >
        {children[value]}
      </div>
    </div>
  );
};

export default VerticalTabs;
