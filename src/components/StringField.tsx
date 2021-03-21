import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, useCallback, useState } from "react";
import { FieldComponent } from "./util";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IconButton, InputAdornment } from "@material-ui/core";

type ExtraProps = { toggleable?: boolean };

const useInputProps = ({toggleable}: ExtraProps) => {
  const [show, setShow] = useState(false);
  if (toggleable) {
    return {
      type: show ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)}>
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

const StringField: FieldComponent<string, { toggleable?: boolean }> = ({ value, setValue, ...props }) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value || ""),
    [setValue]
  );
  const inputProps = useInputProps(props);
  return (
    <TextField
      {...props}
      value={value}
      type={props.name?.toLowerCase() === "password" ? "password" : "text"}
      onChange={onChange}
      placeholder={`Enter ${props.label}...`}
      {...inputProps}
    />
  );
};

export default StringField;
