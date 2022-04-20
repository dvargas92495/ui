import React, { useMemo } from "react";
import { useTransition } from "@remix-run/react";

const Button = ({
  children,
  disabled,
  className,
  ...buttonProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const transition = useTransition();
  const loading = useMemo(
    () => transition.state === "submitting",
    [transition]
  );
  return (
    <button
      type="submit"
      className={`px-8 py-3 font-semibold rounded-full bg-sky-500 hover:bg-sky-800${
        className ? ` ${className}` : ""
      } disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:opacity-50 disabled:hover:bg-sky-500 disabled:hover:bg-opacity-50`}
      disabled={typeof disabled === "undefined" ? loading : disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
