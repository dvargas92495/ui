import MuiTooltip, { TooltipProps } from "@material-ui/core/Tooltip";
import React from "react";

const Tooltip: React.FunctionComponent<TooltipProps> = (props) => (
  <MuiTooltip {...props} />
);

export default Tooltip;
