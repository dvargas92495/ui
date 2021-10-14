import { SignedOut } from "@clerk/clerk-react";
import Loading from "./Loading"
import React, { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    window.location.assign("/login");
  }, []);
  return (
    <div>
      <Loading loading />
      <span style={{ marginLeft: 32 }}>Redirecting to login...</span>
    </div>
  );
};

const RedirectToLogin: React.FunctionComponent = () => {
  return (
    <SignedOut>
      <Redirect />
    </SignedOut>
  );
};

export default RedirectToLogin;
