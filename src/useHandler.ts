import { useCallback } from "react";
import getHandler from "./getHandler";

const useHandler = <T extends (arg: never) => Promise<unknown>>({
  path,
  method,
}: {
  path: string;
  method: "PUT" | "POST" | "GET" | "DELETE";
}) => {
  return useCallback(
    getHandler<T>({ path, method }),
    [method, path]
  );
};

export default useHandler;
