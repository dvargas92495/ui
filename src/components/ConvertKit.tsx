import React, { useEffect, useState } from "react";

const ConvertKit = ({ id }: { id: string }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://prodigious-trader-7332.ck.page/${id}/index.js`;
      script.id = id;
      document.head.appendChild(script);
      setLoaded(true);
      return () => script.remove();
    }
    return;
  }, [setLoaded]);
  return (
    <>
      {!loaded && <div style={{ height: 300, background: "#333333" }} />}
      <script data-uid={id} />
    </>
  );
};

export default ConvertKit;
