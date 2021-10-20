import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useCallback, useState } from "react";
import { FieldComponent } from "../types";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";

type ExtraProps = { toggleable?: boolean };

const useInputProps = ({ toggleable }: ExtraProps) => {
  const [show, setShow] = useState(false);
  if (toggleable) {
    return {
      type: show ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)} size="large">
              {show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      },
    };
  } else {
    return {};
  }
};

const StringField: FieldComponent<string, { toggleable?: boolean }> = ({
  value,
  setValue,
  toggleable,
  ...props
}) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value || ""),
    [setValue]
  );
  const inputProps = useInputProps({ toggleable });
  return (
    <TextField
      {...props}
      value={value}
      type={props.name?.toLowerCase() === "password" ? "password" : "text"}
      onChange={onChange}
      placeholder={`Enter ${props.label}...`}
      InputProps={{
        ...props.InputProps,
        ...inputProps.InputProps,
      }}
      {...inputProps}
    />
  );
};

export default StringField;
