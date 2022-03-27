import { rootAuthLoader } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/server-runtime";

const remixRootLoader = (
  args: Parameters<LoaderFunction>[0] & { env: Record<string, string> }
): ReturnType<LoaderFunction> =>
  rootAuthLoader(
    args,
    () => ({
      ENV: {
        API_URL: process.env.API_URL,
        CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
        HOST: process.env.HOST,
        NODE_ENV: process.env.NODE_ENV,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        ...args.env,
      },
    }),
    { loadUser: true }
  );

export default remixRootLoader;
