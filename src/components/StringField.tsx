import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "./util";

const StringField: FieldComponent<string> = ({ value, setValue, ...props }) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value || ''),
    [setValue]
  );
  return (
    <TextField
      {...props}
      value={value}
      type={"text"}
      onChange={onChange}
      placeholder={`Enter ${props.label}...`}
    />
  );
};

export default StringField;
