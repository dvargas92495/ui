import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import React from "react";

const Loading: React.FunctionComponent<
  { loading: boolean } & CircularProgressProps
> = ({ loading, ...props }) => (
  <>{loading && <CircularProgress {...props} />}</>
);

export default Loading;
