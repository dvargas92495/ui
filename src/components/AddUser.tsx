import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useCallback, useState } from "react";

const useStyles = makeStyles(() => ({
  button: {
    minWidth: 84,
  },
}));

const AddUser = ({
  buttonText,
  children,
}: {
  buttonText: string;
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
      <Dialog onClose={close} open={isOpen}>
        <DialogTitle>{buttonText}</DialogTitle>
        {children}
      </Dialog>
    </>
  );
};
export default AddUser;
