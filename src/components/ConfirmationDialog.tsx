import { CircularProgress, makeStyles } from "@material-ui/core";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useCallback, useState } from "react";
import H6 from "./H6";

const useStyles = makeStyles(() => ({
  title: {
    margin: 0,
  },
  content: {
    margin: 0,
  },
}));

const ConfirmationDialog: React.FunctionComponent<{
  buttonText?: React.ReactNode;
  color?: "primary" | "secondary";
  title: string;
  content: string;
  action?: () => Promise<any>;
  onSuccess?: () => void;
  defaultIsOpen?: boolean;
  disabled?: boolean;
  actions?: { text: string; onClick: () => Promise<any> }[];
  Button?: (
    p: Required<
      Pick<ButtonProps, "children" | "color" | "variant"> & {
        onClick: () => void;
      }
    >
  ) => React.ReactElement;
}> = ({
  buttonText = '',
  color = "primary",
  title,
  content,
  action,
  onSuccess,
  actions,
  defaultIsOpen = false,
  disabled = false,
  Button = MuiButton,
}) => {
  const [open, setOpen] = useState(defaultIsOpen);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleOpen = useCallback(() => {
    setError("");
    setOpen(true);
  }, [setOpen, setError]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const closeWithSuccess = useCallback(() => {
    handleClose();
    if (onSuccess) {
      onSuccess();
    }
  }, [handleClose, onSuccess]);
  const onSubmit = useCallback(
    (action?: () => Promise<any>) => () => {
      setLoading(true);
      setError("");
      action?.()
        .then(closeWithSuccess)
        .catch((e) =>
          setError(e.response?.data?.error || e.response?.data || e.message)
        )
        .finally(() => setLoading(false));
    },
    [setLoading, closeWithSuccess, setError, action]
  );
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
          <DialogContentText className={classes.content}>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogContentText color={"error"}>{error}</DialogContentText>
          {loading && <CircularProgress />}
          <MuiButton onClick={handleClose} color="secondary">
            Cancel
          </Button>
          {actions?.length ? (
            actions.map(({ text, onClick }) => (
              <MuiButton
                onClick={onSubmit(onClick)}
                color="primary"
                disabled={loading || disabled}
              >
                {text}
              </MuiButton>
            ))
          ) : (
            <MuiButton
              onClick={onSubmit(action)}
              color="primary"
              disabled={loading || disabled}
            >
              Submit
            </MuiButton>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
