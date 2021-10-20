import { CircularProgress } from "@mui/material";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useState } from "react";
import H6 from "./H6";

const PREFIX = "ConfirmationDialog";

const classes = {
  title: `${PREFIX}-title`,
  content: `${PREFIX}-content`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(() => ({
  [`& .${classes.title}`]: {
    margin: 0,
  },

  [`& .${classes.content}`]: {
    margin: 0,
  },
}));

const ConfirmationDialog: React.FunctionComponent<{
  buttonText: React.ReactNode;
  color?: "primary" | "secondary";
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
    <Root>
      <Button color={color} variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle>
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
    </Root>
  );
};

export default ConfirmationDialog;
