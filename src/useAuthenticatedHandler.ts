import { useSession } from "@clerk/clerk-react";

type InnerPromise<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R
  : unknown;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAuthenticatedHandler = <T extends (arg: never) => Promise<unknown>>({
  path,
  method,
}: {
  path: string;
  method: "PUT" | "POST" | "GET" | "DELETE";
}) => {
  const { getToken } = useSession();
  const httpMethod = method.toUpperCase();
  const isBody = ["PUT", "POST"].includes(httpMethod);
  return (params?: Omit<Parameters<T>[0], "user">) =>
    getToken().then((token) =>
      fetch(
        `${process.env.API_URL}/${path}${
          isBody || !params
            ? ""
            : `?${new URLSearchParams(
                Object.fromEntries(
                  Object.keys(params).map((k) => [k, `${params[k]}`])
                )
              ).toString()}`
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            ...(isBody ? { "Content-Type": "application/json" } : {}),
          },
          method: "POST",
          ...(isBody ? { body: JSON.stringify(params) } : {}),
        }
      ).then((r) => {
        if (r.ok) {
          return r.json().then((d) => d as InnerPromise<ReturnType<T>>);
        } else {
          return r.text().then((s) => {
            throw new Error(s);
          });
        }
      })
    );
};

export default useAuthenticatedHandler;
