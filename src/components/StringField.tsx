import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "./util";

const StringField: FieldComponent<string> = ({ value, onChange, ...props }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value || ''),
    [onChange]
  );
  return (
    <TextField
      {...props}
      value={`${value}`}
      type={"text"}
      onChange={handleChange}
      placeholder={'0'}
    />
  );
};

export default StringField;
