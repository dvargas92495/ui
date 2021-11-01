import { InnerPromise } from "./types";

const getHandler = <T extends (arg: never) => Promise<unknown>>({
  method,
  path,
  headers,
}: {
  method: "PUT" | "POST" | "GET" | "DELETE";
  path: string;
  headers?: Record<string, string>;
}) => {
  const isBody = ["PUT", "POST"].includes(method);
  return (params?: Omit<Parameters<T>[0], "user">) =>
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
          ...(isBody ? { "Content-Type": "application/json" } : {}),
          ...headers,
        },
        method,
        ...(isBody ? { body: JSON.stringify(params) } : {}),
      }
    ).then((r) => {
      if (r.ok) {
        return r
          .json()
          .then(
            (d) => d as Omit<InnerPromise<ReturnType<T>>, "code" | "headers">
          );
      } else {
        return r.text().then((s) => {
          throw new Error(s);
        });
      }
    });
};

export default getHandler;
