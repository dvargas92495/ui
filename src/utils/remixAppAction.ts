import { ActionFunction } from "@remix-run/server-runtime";

const remixAppAction = (
  { request }: Parameters<ActionFunction>[0],
  callback?: (args: {
    userId: string;
    data: Record<string, string[]>;
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
      const formData = await request.formData();
      const data = Object.fromEntries(
        Array.from(formData.keys()).map((k) => [
          k,
          formData.getAll(k).map((v) => v as string),
        ])
      );
      return callback({ userId, data });
    })
    .catch((e) => ({ success: false, error: e.message }));
};

export default remixAppAction;
