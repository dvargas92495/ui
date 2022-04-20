import React from "react";
import { useEffect, useState } from "react";
import { useActionData } from "@remix-run/react";
import Toast from "./Toast";

const SuccessfulActionToast = ({
  message = "Successfully submitted action!",
}: {
  message?: string;
}) => {
  const data = useActionData();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (data?.success) setIsOpen(true);
  }, [data]);
  return (
    <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message={message} />
  );
};

export default SuccessfulActionToast;
