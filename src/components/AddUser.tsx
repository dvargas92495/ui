import { DialogContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useCallback, useState } from "react";

const useStyles = makeStyles(() => ({
  dialog: {
    textAlign: "center",
  },
  button: {
    minWidth: 84,
  },
  title: {
    marginBottom: 0,
  },
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
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  return (
    <>
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
    </>
  );
};
export default AddUser;
