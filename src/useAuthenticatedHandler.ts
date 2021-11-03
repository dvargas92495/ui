import { useSession } from "@clerk/clerk-react";
import { useCallback } from "react";
import getHandler from "./getHandler";

const useAuthenticatedHandler = <T extends (arg: never) => Promise<unknown>>({
  path,
  method,
}: {
  path: string;
  method: "PUT" | "POST" | "GET" | "DELETE";
}) => {
  const { getToken } = useSession();
  return useCallback(
    (params?: Omit<Parameters<T>[0], "user">) =>
      getToken().then((token) =>
        getHandler<(p: Omit<Parameters<T>[0], "user">) => ReturnType<T>>({
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method,
          path,
        })(params)
      ),
    [/*getToken, returning a new method right now */ method, path]
  );
};

export default useAuthenticatedHandler;
