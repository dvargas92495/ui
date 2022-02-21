import { useSession } from "@clerk/remix";
import { useCallback } from "react";
import getHandler from "./getHandler";

const useAuthenticatedHandler = <T extends (arg: never) => Promise<unknown>>({
  path,
  method,
}: {
  path: string;
  method: "PUT" | "POST" | "GET" | "DELETE";
}) => {
  const { session, isSignedIn } = useSession();
  return useCallback(
    (params?: Omit<Parameters<T>[0], "user">) =>
      !isSignedIn ? Promise.reject(new Error('No user is logged in')) : !session ? Promise.reject(new Error('Logged in user is missing a session object')) : session.getToken().then((token) =>
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
