import { CircularProgress } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useState } from "react";

const ConfirmationDialog: React.FunctionComponent<{
  buttonText: React.ReactNode;
  color?: ButtonProps['color'];
  title: string;
  content: string;
  action: () => Promise<any>;
  onSuccess?: () => void;
  defaultIsOpen?: boolean;
  disabled?: boolean;
}> = ({
  buttonText,
  color = "primary",
  title,
  content,
  action,
  onSuccess,
  defaultIsOpen = false,
  disabled = false,
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
  const onSubmit = useCallback(() => {
    setLoading(true);
    setError("");
    action()
      .then(closeWithSuccess)
      .catch((e) =>
        setError(e.response?.data?.error || e.response?.data || e.message)
      )
      .finally(() => setLoading(false));
  }, [setLoading, closeWithSuccess, setError, action]);

  return (
    <>
      <Button color={color} variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle sx={{ m: 0 }}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ m: 0 }}>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogContentText color={"error"}>{error}</DialogContentText>
          {loading && <CircularProgress />}
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            color="primary"
            disabled={loading || disabled}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
