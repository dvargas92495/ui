import SvgIcon from "@material-ui/core/SvgIcon";
import React from "react";

const Logo = ({
  size,
  viewBoxWidth,
  children,
}: {
  size: number;
  viewBoxWidth: number;
  children: React.ReactNode;
}) => (
  <SvgIcon
    viewBox={`0 0 ${viewBoxWidth} 400`}
    style={{ width: `${size}em`, height: `${size}em` }}
  >
    {children}
  </SvgIcon>
);

export default Logo;
