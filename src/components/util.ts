import { TextFieldProps } from "@material-ui/core/TextField";

export const BASE_PATH = `${process.env.APP_BASE_PATH || ""}/`;

export type FieldComponent<T> = React.FunctionComponent<
  TextFieldProps & {
    value: T;
    setValue: (v: T) => void;
  }
>;
