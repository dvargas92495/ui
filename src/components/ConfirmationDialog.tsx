import { CircularProgress } from "@mui/material";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useState } from "react";

const ConfirmationDialog: React.FunctionComponent<{
  buttonText?: React.ReactNode;
  color?: ButtonProps["color"];
  title: string;
  content: string;
  action?: () => Promise<any>;
  onSuccess?: () => void;
  defaultIsOpen?: boolean;
  disabled?: boolean;
  Button?: (
    p: Required<
      Pick<ButtonProps, "children" | "color" | "variant"> & {
        onClick: () => void;
      }
    >
  ) => React.ReactElement;
  actions?: { text: string; onClick: () => Promise<any> }[];
}> = ({
  buttonText = "",
  color = "primary",
  title,
  content,
  action,
  onSuccess,
  defaultIsOpen = false,
  actions = [],
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
    [setLoading, closeWithSuccess, setError]
  );
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
          {loading && <CircularProgress size={24} />}
          <MuiButton onClick={handleClose} color="secondary">
            Cancel
          </MuiButton>
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
