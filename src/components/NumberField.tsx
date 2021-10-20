import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "../types";

type Dimension = "money";

const getInputProps = (dimension?: Dimension) => {
  if (dimension === "money") {
    return {
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    };
  } else {
    return {};
  }
};

const NumberField: FieldComponent<number, { dimension?: Dimension }> = ({
  value,
  setValue,
  dimension,
  ...props
}) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setValue(parseInt(e.target.value) || 0),
    [setValue]
  );
  return (
    <TextField
      {...props}
      value={`${value}`}
      type={"number"}
      onChange={onChange}
      placeholder={"0"}
      InputProps={getInputProps(dimension)}
    />
  );
};

export default NumberField;
