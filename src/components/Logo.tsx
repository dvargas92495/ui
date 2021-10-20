import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const Logo = ({
  viewBoxWidth,
  children,
}: {
  viewBoxWidth: number;
  children: React.ReactNode;
}) => (
  <SvgIcon
    viewBox={`0 0 ${viewBoxWidth} 400`}
    style={{ width: "80%", height: "100%", verticalAlign: "middle" }}
  >
    {children}
  </SvgIcon>
);

export default Logo;
