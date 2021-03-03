import { CircularProgress, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useCallback, useState } from "react";
import H6 from "./H6";

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: 0,
  },
}));

const ConfirmationDialog: React.FunctionComponent<{
  buttonText: string;
  color?: "primary" | "secondary";
  title: string;
  content: string;
  action: () => Promise<any>;
  onSuccess?: () => void;
}> = ({ buttonText, color = "primary", title, content, action, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const closeWithSuccess = useCallback(() => {
    handleClose();
    if (onSuccess) {
      onSuccess();
    }
  }, [handleClose, onSuccess]);
  const onSubmit = useCallback(() => {
    setLoading(true);
    action()
      .then(closeWithSuccess)
      .catch((e) => setError(e.response?.data || e.message))
      .finally(() => setLoading(false));
  }, [setLoading, closeWithSuccess, setError, action]);
  const classes = useStyles();
  return (
    <>
      <Button color={color} variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle disableTypography={true}>
          <H6 className={classes.title}>{title}</H6>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogContentText color={"error"}>{error}</DialogContentText>
          {loading && <CircularProgress />}
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary" disabled={loading}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
