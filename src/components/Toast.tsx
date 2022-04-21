import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
// import SuccessIcon from "../../assets/Success.svg";
// import WarningIcon from "../../assets/Warning.svg";
// import ErrorIcon from "../../assets/Error.svg";

// const Icons = {
//   success: SuccessIcon,
//   warning: WarningIcon,
//   error: ErrorIcon,
// };

type ToastIntent = "success" | "warning" | "error";
type VERTICAL_POSITION = "BOTTOM" | "TOP";
type HORIZONTAL_POSITION = "LEFT" | "RIGHT";

// original inspiration: https://github.com/mui-org/material-ui/blob/bf78a4a212cb328c951a9f3590a9518c72168f5c/packages/mui-material/src/Snackbar/Snackbar.js
const Toast = ({
  actions = [],
  autoHideDuration = 5000,
  intent = "success",
  isOpen,
  message,
  onClose,
  position = "BOTTOM",
  showCloseIcon = false,
  title,
}: {
  actions?: { text: string; onClick: () => void }[];
  autoHideDuration?: number | null;
  intent?: ToastIntent;
  isOpen: boolean;
  message: React.ReactNode;
  onClose: () => void;
  position?: `${VERTICAL_POSITION}${`_${HORIZONTAL_POSITION}` | ""}`;
  showCloseIcon?: boolean;
  title?: React.ReactNode;
}) => {
  const timerAutoHide = useRef(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  const setAutoHideTimer = useCallback(
    (autoHideDurationParam: number | null) => {
      if (autoHideDurationParam == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = window.setTimeout(onClose, autoHideDurationParam);
    },
    [onClose, timerAutoHide]
  );

  React.useEffect(() => {
    if (isOpen) {
      setAutoHideTimer(autoHideDuration);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [isOpen, autoHideDuration, setAutoHideTimer]);

  // Pause the timer when the user is interacting with the Toast
  // or when the user hide the window.
  const handlePause = useCallback(() => {
    clearTimeout(timerAutoHide.current);
  }, [timerAutoHide]);

  // Restart the timer when the user is no longer interacting with the Toast
  // or when the window is shown back.
  const handleResume = useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(autoHideDuration * 0.5);
    }
  }, [autoHideDuration, setAutoHideTimer]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);

      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return undefined;
  }, [handleResume, isOpen]);

  const handleKeyDown = useCallback(
    (nativeEvent: KeyboardEvent) => {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose();
        }
      }
    },
    [onClose]
  );

  const handleClickAway = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!nodeRef.current) {
        return;
      }
      const target = event.target as HTMLElement;
      const insideDOM = event.composedPath
        ? event.composedPath().indexOf(nodeRef.current) > -1
        : document.contains(target) || nodeRef.current.contains(target);

      if (!insideDOM) {
        onClose();
      }
    },
    [nodeRef, onClose]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickAway);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) {
    return null;
  }
  // const Icon = Icons[intent];
  const [verticalPosition, horizontalPosition] = position.split("_") as [
    VERTICAL_POSITION,
    HORIZONTAL_POSITION
  ];

  return (
    <div
      onBlur={handleResume}
      onFocus={handlePause}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      ref={nodeRef}
      className={`z-50 fixed flex left-6 right-6 justify-center items-center ${
        verticalPosition === "TOP" ? "top-6" : ""
      }${verticalPosition === "BOTTOM" ? "bottom-6" : ""} ${
        horizontalPosition === "LEFT" ? "justify-left" : ""
      }${horizontalPosition === "RIGHT" ? "justify-right" : ""}`}
    >
      <div
        className={`shadow-md p-3 flex flex-col w-96 border-2 rounded-sm ${
          intent === "success"
            ? "border-green-700 text-green-700 bg-green-400"
            : ""
        }${
          intent === "warning"
            ? "border-yellow-700 text-yellow-700 bg-yellow-400"
            : ""
        }${
          intent === "error"
            ? "border-red-700 text-red-700 bg-red-400"
            : ""
        }`}
      >
        <div className="flex items-center">
          <div className="mr-3">
            {/* <Icon /> */}
            <svg className="w-6 h-6"/>
          </div>
          <div className="flex-grow">
            {title && <h1 className="font-bold text-sm mb-1">{title}</h1>}
            <div className="font-semibold text-xs">{message}</div>
          </div>
          {showCloseIcon && (
            <div className="ml-3 cursor-pointer">
              <span onClick={onClose}>X</span>
            </div>
          )}
        </div>
        {!!actions.length && (
          <div className="flex flex-row-reverse">
            {actions.map((a, key) => (
              <button
                key={key}
                onClick={a.onClick}
                className="ml-3 font-semibold text-xs flex items-center bg-transparent border-none hover:cursor-pointer hover:bg-gray-500"
              >
                {a.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toast;
