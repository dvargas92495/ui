import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/server-runtime"

const getRootAuthedLoader = (): LoaderFunction => ({ request }) => {
  return getAuth(request).then((authData) => {
    if (!!authData.userId) {
      return redirect("/user");
    }
    return {};
  });
};

export default getRootAuthedLoader;
