import React from "react";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import FileCopy from "@mui/icons-material/FileCopy";
import Delete from "@mui/icons-material/Delete";

const ICONS = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  fileCopy: FileCopy,
  delete: Delete,
};

const IconButton = ({
  icon,
  ...props
}: IconButtonProps & { icon: keyof typeof ICONS }) => {
  const Icon = ICONS[icon];
  return (
    <MuiIconButton {...props}>
      <Icon />
    </MuiIconButton>
  );
};

export default IconButton;
