import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "../types";
import parse from "date-fns/parse";
import format from "date-fns/format";

const DateField: FieldComponent<Date> = ({ value, setValue, ...props }) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setValue(parse(e.target.value, "yyyy-MM-dd", new Date())),
    [setValue]
  );
  return (
    <TextField
      {...props}
      value={format(value, "yyyy-MM-dd")}
      type={"date"}
      onChange={onChange}
      placeholder={"YYYY-MM-DD"}
    />
  );
};

export default DateField;
