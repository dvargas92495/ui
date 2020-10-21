import Grid from "@material-ui/core/Grid";
import React from "react";

const VerticalGridContent = ({
  children,
}: {
  children: React.ReactNodeArray;
}) => (
  <Grid container spacing={2}>
    {children.map((c) => (
      <Grid item xs={12}>
        {c}
      </Grid>
    ))}
  </Grid>
);

export default VerticalGridContent;
