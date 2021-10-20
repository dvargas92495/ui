import type { TextFieldProps } from "@mui/material/TextField";

export type InnerPromise<T extends Promise<unknown>> = T extends Promise<
  infer R
>
  ? R
  : unknown;

export type FieldComponent<T, U = {}> = React.FunctionComponent<
  TextFieldProps & {
    value: T;
    setValue: (v: T) => void;
  } & U
>;
