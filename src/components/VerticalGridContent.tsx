import Grid from "@mui/material/Grid";
import React from "react";

const VerticalGridContent = ({
  children,
}: {
  children: React.ReactNodeArray;
}) => (
  <Grid container spacing={2}>
    {children.map((c, i) => (
      <Grid item xs={12} key={i}>
        {c}
      </Grid>
    ))}
  </Grid>
);

export default VerticalGridContent;
