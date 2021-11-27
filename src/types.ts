import type { TextFieldProps } from "@mui/material/TextField";

export type FieldComponent<T, U = {}> = React.FunctionComponent<
  TextFieldProps & {
    value: T;
    setValue: (v: T) => void;
  } & U
>;
