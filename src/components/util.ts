import { TextFieldProps } from "@material-ui/core/TextField";

export type FieldComponent<T, U = {}> = React.FunctionComponent<
  TextFieldProps & {
    value: T;
    setValue: (v: T) => void;
  } & U
>;
