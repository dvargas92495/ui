import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "./util";

const NumberField: FieldComponent<number> = ({ value, setValue, ...props }) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value) || 0),
    [setValue]
  );
  return (
    <TextField
      {...props}
      value={`${value}`}
      type={"number"}
      onChange={onChange}
      placeholder={'0'}
    />
  );
};

export default NumberField;
