import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const DataLoader = ({
  loadAsync,
  children,
}: {
  loadAsync: () => Promise<void>;
  children?: React.ReactNode;
}) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadAsync()
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [loadAsync, setError, setLoading]);
  return loading ? (
    <CircularProgress />
  ) : error ? (
    <Typography variant="body1" color="error">
      {error}
    </Typography>
  ) : (
    <>{children}</>
  );
};

export default DataLoader;
