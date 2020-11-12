import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "./util";

const NumberField: FieldComponent<number> = ({ value, onChange, ...props }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(parseInt(e.target.value) || 0),
    [onChange]
  );
  return (
    <TextField
      {...props}
      value={`${value}`}
      type={"number"}
      onChange={handleChange}
      placeholder={'0'}
    />
  );
};

export default NumberField;
