import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useCallback } from "react";
import { FieldComponent } from "./util";
import parse from "date-fns/parse";
import format from "date-fns/format";

const DateField: FieldComponent<Date> = ({ value, onChange, ...props }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(parse(e.target.value, "yyyy-MM-dd", new Date())),
    [onChange]
  );
  return (
    <TextField
      {...props}
      value={format(value, "yyyy-MM-dd")}
      type={"date"}
      onChange={handleChange}
      placeholder={'YYYY-MM-DD'}
    />
  );
};

export default DateField;
