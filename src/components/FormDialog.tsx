import MuiButton from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useMemo, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { FieldComponent } from "../types";
import H6 from "./H6";

type FormElement<T> = {
  defaultValue: T;
  name: string;
  validate: (value: T) => string;
  component: FieldComponent<T>;
};

const FormDialog = ({
  defaultIsOpen = false,
  onSave,
  onSuccess,
  buttonText,
  title,
  contentText = "",
  formElements,
  Button = ({ onClick, buttonText }) => (
    <MuiButton color="primary" variant="contained" onClick={onClick}>
      {buttonText}
    </MuiButton>
  ),
}: {
  onSave: (body: Record<string, string | number | Date>) => Promise<unknown>;
  onSuccess?: () => void;
  buttonText: string;
  title: React.ReactNode;
  contentText?: React.ReactNode;
  formElements: (
    | FormElement<string>
    | FormElement<number>
    | FormElement<Date>
  )[];
  defaultIsOpen?: boolean;
  Button?: (p: {
    onClick: () => void;
    buttonText: string;
  }) => React.ReactElement;
}) => {
  const [open, setOpen] = useState(defaultIsOpen);
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
    ({ name, value }: { name: string; value: string | number | Date }) => {
      setFormData({ ...formData, [name]: value });
      setError("");
    },
    [formData, setFormData, setError]
  );
  const saveDisabled = useMemo(
    () =>
      Object.values(fieldError).some((m) => !!m) ||
      Object.values(formData).some((v) => !v) ||
      !!error ||
      loading,
    [fieldError, formData, error, loading]
  );

  return (
    <>
      <Button onClick={handleOpen} buttonText={buttonText} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="issue-form-title"
      >
        <DialogTitle>
          <H6 sx={{ marginBottom: 0 }}>{title}</H6>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <Grid container spacing={2}>
            {formElements.map((f) => {
              const { component: FormComponent, validate } = f as FormElement<
                typeof f.defaultValue
              >;
              return (
                <Grid item xs={12} key={f.name}>
                  <FormComponent
                    key={f.name}
                    value={formData[f.name]}
                    setValue={(v) => onChange({ name: f.name, value: v })}
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
                      const error = validate(formData[f.name]);
                      if (error) {
                        setFieldError({ ...fieldError, [f.name]: error });
                      }
                    }}
                    onFocus={() =>
                      setFieldError({ ...fieldError, [f.name]: "" })
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <DialogContentText color={"error"}>{error}</DialogContentText>
          {loading && <CircularProgress />}
          <MuiButton onClick={handleClose} color="secondary">
            Cancel
          </MuiButton>
          <MuiButton onClick={onSubmit} color="primary" disabled={saveDisabled}>
            Submit
          </MuiButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
