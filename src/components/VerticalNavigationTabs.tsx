import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";

const VerticalNavigationTabs = ({
  items,
  children,
}: {
  items: { label: string; href: string }[];
  children: React.ReactNode;
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => setValue(newValue),
    [setValue]
  );

  return (
    <div>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical Navigation Tabs"
      >
        {items.map((item, i) => (
          <Tab
            key={i}
            label={item.label}
            href={item.href}
            component={"a"}
            id={`nav-tab-${i}`}
            aria-controls={`nav-tabpanel-${i}`}
          />
        ))}
      </Tabs>
      <div
        role="tabpanel"
        id={`nav-tabpanel-${value}`}
        aria-labelledby={`nav-tab-${value}`}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalNavigationTabs;
