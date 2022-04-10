import { ActionFunction } from "@remix-run/server-runtime";
import type { Params } from "react-router";

type ActionMethod = "POST" | "PUT" | "DELETE";

const remixAppAction = (
  { request, params }: Parameters<ActionFunction>[0],
  callback?: (args: {
    userId: string;
    data: Record<string, string[]>;
    method: ActionMethod;
    params: Params<string>;
    searchParams: Record<string, string>;
  }) => ReturnType<ActionFunction>
) => {
  return import("@clerk/remix/ssr.server.js")
    .then((clerk) => clerk.getAuth(request))
    .then(async ({ userId }) => {
      if (!userId) {
        throw new Response(
          "Cannot access private page while not authenticated",
          { status: 401 }
        );
      }
      if (!callback) return {};
      const searchParams = Object.fromEntries(
        new URL(request.url).searchParams
      );
      const formData = await request.formData();
      const data = Object.fromEntries(
        Array.from(formData.keys()).map((k) => [
          k,
          formData.getAll(k).map((v) => v as string),
        ])
      );
      return callback({
        userId,
        data,
        method: request.method as ActionMethod,
        searchParams,
        params,
      });
    });
};

export default remixAppAction;
