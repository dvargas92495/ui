import React from "react";
import MuiIconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FileCopy from "@material-ui/icons/FileCopy";
import Delete from "@material-ui/icons/Delete";

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
