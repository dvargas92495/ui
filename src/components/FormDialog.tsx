import MuiButton, { ButtonProps } from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useMemo, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { FieldComponent } from "../types";

type FormElement<T> = {
  defaultValue: T;
  validate: (value: T) => string;
  component: FieldComponent<T>;
  order: number;
};

const FormDialog = <T extends Record<string, string | number | Date>>({
  defaultIsOpen = false,
  onSave,
  onSuccess,
  buttonText,
  title,
  contentText = "",
  formElements,
  Button = (props) => <MuiButton {...props} />,
}: {
  onSave: (body: T) => Promise<unknown>;
  onSuccess?: () => void;
  buttonText: React.ReactNode;
  title: React.ReactNode;
  contentText?: React.ReactNode;
  formElements: { [k in keyof T]: FormElement<T[k]> };
  defaultIsOpen?: boolean;
  Button?: (
    p: Pick<ButtonProps, "color" | "variant" | "onClick" | "children">
  ) => React.ReactElement;
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
    Object.fromEntries(Object.keys(formElements).map((f) => [f, ""]))
  );
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<T>(
    Object.fromEntries(
      Object.entries(formElements).map(([name, f]) => [name, f.defaultValue])
    ) as T
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
      <Button onClick={handleOpen} color="primary" variant="contained">
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
          <Grid container spacing={2}>
            {Object.keys(formElements)
              .sort((a, b) => formElements[a].order - formElements[b].order)
              .map((name) => {
                const {
                  component: FormComponent,
                  validate,
                  order,
                } = formElements[name];
                const value = formData[name] as T[string];
                return (
                  <Grid item xs={12} key={name}>
                    <FormComponent
                      key={name}
                      value={value}
                      setValue={(v) => onChange({ name, value: v })}
                      required
                      fullWidth
                      error={!!fieldError[name]}
                      helperText={fieldError[name]}
                      name={name}
                      label={`${name.charAt(0).toUpperCase()}${name.substring(
                        1
                      )}`}
                      variant={"filled"}
                      onBlur={() => {
                        const error = validate(value);
                        if (error) {
                          setFieldError({ ...fieldError, [name]: error });
                        }
                      }}
                      onFocus={() =>
                        setFieldError({ ...fieldError, [name]: "" })
                      }
                      autoFocus={order === 0}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <DialogContentText color={"error"}>{error}</DialogContentText>
          {loading && <CircularProgress size={24} />}
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
