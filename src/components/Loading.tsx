import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import React from "react";

const Loading: React.FunctionComponent<
  { loading: boolean } & CircularProgressProps
> = ({ loading, ...props }) => (
  <>{loading && <CircularProgress {...props} />}</>
);

export default Loading;
