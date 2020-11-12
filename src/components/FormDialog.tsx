import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useCallback, useMemo, useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FieldComponent } from "./util";

type FormElement<T> = {
  defaultValue: T;
  name: string;
  validate: (value: T) => string;
  component: FieldComponent<T>;
};

const FormDialog = ({
  onSave,
  onSuccess,
  buttonText,
  title,
  contentText,
  formElements,
}: {
  onSave: (body: any) => Promise<any>;
  onSuccess: () => void;
  buttonText: string;
  title: React.ReactNode;
  contentText: React.ReactNode;
  formElements: FormElement<string | number | Date>[];
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const closeWithSuccess = useCallback(() => {
    handleClose();
    onSuccess();
  }, [handleClose, onSuccess]);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState(
    Object.fromEntries(formElements.map((f) => [f.name, ""]))
  );
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    Object.fromEntries(formElements.map((f) => [f.name, f.defaultValue]))
  );
  const onSubmit = useCallback(() => {
    setLoading(true);
    onSave(formData)
      .then(closeWithSuccess)
      .catch((e) => setError(e.response?.data || e.message))
      .finally(() => setLoading(false));
  }, [setLoading, formData, closeWithSuccess, setError]);
  const onChange = useCallback(
    ({ name, value }: { name: string; value: any }) =>
      setFormData({ ...formData, [name]: value }),
    [formData, setFormData]
  );
  const saveDisabled = useMemo(
    () => Object.values(fieldError).some((m) => !!m),
    [fieldError]
  );

  return (
    <>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="issue-form-title"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <Grid container spacing={1}>
            {formElements.map((f) => (
              <Grid item xs={6} key={f.name}>
                <f.component
                  key={f.name}
                  value={formData[f.name]}
                  onChange={(v: any) => onChange({ name: f.name, value: v })}
                  required
                  fullWidth
                  error={!!fieldError[f.name]}
                  helperText={fieldError[f.name]}
                  name={f.name}
                  label={`${f.name.charAt(0).toUpperCase()}${f.name.substring(
                    1
                  )}`}
                  variant={"filled"}
                  onBlur={() => {
                    const error = f.validate(formData[f.name]);
                    if (error) {
                      setFieldError({ ...fieldError, [f.name]: error });
                    }
                  }}
                  onFocus={() => setFieldError({ ...fieldError, [f.name]: "" })}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <DialogContentText color={"error"}>{error}</DialogContentText>
          <DialogContentText color={"primary"}>
            {loading && <CircularProgress />}
          </DialogContentText>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary" disabled={saveDisabled}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
