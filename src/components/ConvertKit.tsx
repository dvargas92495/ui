import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";

const ConvertKit = ({ id }: { id: string }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://prodigious-trader-7332.ck.page/${id}/index.js`;
    document.head.appendChild(script);
    setLoaded(true);
  }, [setLoaded]);
  return (
    <>
      {!loaded && <Skeleton variant="rectangular" height={300} />}
      <script data-uid={id} />
    </>
  );
};

export default ConvertKit;
