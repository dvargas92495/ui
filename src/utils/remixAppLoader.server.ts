import { LoaderFunction, redirect } from "@remix-run/server-runtime";
import type { Params } from "react-router";

const remixAppLoader = (
  { request, params }: Parameters<LoaderFunction>[0],
  callback?: (args: {
    userId: string;
    params: Params<string>;
    searchParams: Record<string, string>;
  }) => ReturnType<LoaderFunction>
) => {
  return import("@clerk/remix/ssr.server.js")
    .then((clerk) => clerk.getAuth(request))
    .then((authData) => {
      if (!authData.userId) {
        return redirect("/login");
      }
      const searchParams = Object.fromEntries(
        new URL(request.url).searchParams
      );
      return callback
        ? callback({ userId: authData.userId, params, searchParams })
        : {};
    });
};

export default remixAppLoader;
