import DialogContent from "@mui/material/DialogContent";
import styled from '@mui/material/styles/styled';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useState } from "react";

const PREFIX = 'AddUser';

const classes = {
  dialog: `${PREFIX}-dialog`,
  button: `${PREFIX}-button`,
  title: `${PREFIX}-title`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(() => ({
  [`& .${classes.dialog}`]: {
    textAlign: "center",
  },

  [`& .${classes.button}`]: {
    minWidth: 84,
  },

  [`& .${classes.title}`]: {
    marginBottom: 0,
  }
}));

const AddUser = ({
  buttonText,
  title,
  children,
}: {
  buttonText: string;
  title: string;
  children: React.ReactNode;
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  return (
    (<Root>
      <Button
        variant="outlined"
        color="primary"
        onClick={open}
        className={classes.button}
      >
        {buttonText}
      </Button>
      <Dialog onClose={close} open={isOpen} className={classes.dialog}>
        <DialogTitle className={classes.title}>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Root>)
  );
};
export default AddUser;
