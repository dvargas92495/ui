import MuiTooltip, { TooltipProps } from "@mui/material/Tooltip";
import React from "react";

const Tooltip: React.FunctionComponent<TooltipProps> = (props) => (
  <MuiTooltip {...props} />
);

export default Tooltip;
