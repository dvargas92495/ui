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
import { makeStyles } from "@material-ui/core";
import H6 from "./H6";

type FormElement<T> = {
  defaultValue: T;
  name: string;
  validate: (value: T) => string | Promise<string>;
  component: FieldComponent<T>;
};

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: 0,
  },
}));

const FormDialog = ({
  onSave,
  onSuccess,
  buttonText,
  title,
  contentText,
  formElements,
}: {
  onSave: (body: any) => Promise<any>;
  onSuccess?: () => void;
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
    if (onSuccess) {
      onSuccess();
    }
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
    ({ name, value }: { name: string; value: any }) => {
      setFormData({ ...formData, [name]: value });
      setError("");
    },
    [formData, setFormData, setError]
  );
  const saveDisabled = useMemo(
    () =>
      Object.values(fieldError).some((m) => !!m) ||
      Object.values(formData).some((v) => !v) ||
      !!error,
    [fieldError, formData, error]
  );
  const classes = useStyles();

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
        <DialogTitle disableTypography={true}>
          <H6 className={classes.title}>{title}</H6>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <Grid container spacing={2}>
            {formElements.map((f) => (
              <Grid item xs={12} key={f.name}>
                <f.component
                  key={f.name}
                  value={formData[f.name]}
                  setValue={(v: any) => onChange({ name: f.name, value: v })}
                  required
                  fullWidth
                  error={!!fieldError[f.name]}
                  helperText={fieldError[f.name]}
                  name={f.name}
                  label={`${f.name.charAt(0).toUpperCase()}${f.name.substring(
                    1
                  )}`}
                  variant={"filled"}
                  onBlur={async () => {
                    const error = await f.validate(formData[f.name]);
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
          {loading && <CircularProgress />}
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
