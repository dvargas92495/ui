import React from "react";
import { useMemo } from "react";
import { useTransition } from "@remix-run/react";

export type InputProps = {
  label?: React.ReactNode;
  inputClassname?: string;
  labelClassname?: string;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "required"
>;

const BaseInput = ({
  label,
  name,
  disabled,
  type,
  className,
  inputClassname,
  labelClassname,
  ...inputProps
}: InputProps) => {
  const transition = useTransition();
  const loading = useMemo(
    () => transition.state === "submitting",
    [transition]
  );
  return (
    <div className={`mb-6${className ? ` ${className}` : ""}`}>
      <label
        htmlFor={name}
        className={`block mb-2 text-sm font-medium text-gray-900${
          labelClassname ? ` ${labelClassname}` : ""
        }`}
      >
        {label}
      </label>
      <input
        name={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 disabled:opacity-25 disabled:cursor-not-allowed${
          inputClassname ? ` ${inputClassname}` : ""
        }`}
        required
        disabled={typeof disabled === "undefined" ? loading : disabled}
        type={type}
        {...inputProps}
      />
    </div>
  );
};

export default BaseInput;
