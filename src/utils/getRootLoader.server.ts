import { rootAuthLoader } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/server-runtime";

const getRootLoader = ({
  env = {},
}: { env?: Record<string, string | undefined> } = {}): LoaderFunction => (
  args
) =>
  rootAuthLoader(
    args,
    () => ({
      ENV: {
        API_URL: process.env.API_URL,
        CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
        HOST: process.env.HOST,
        NODE_ENV: process.env.NODE_ENV,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        ...env,
      },
    }),
    { loadUser: true }
  );

export default getRootLoader;
