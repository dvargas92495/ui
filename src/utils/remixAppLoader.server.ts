import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/server-runtime";

const remixAppLoader: LoaderFunction = ({ request }) => {
  return getAuth(request).then((authData) => {
    if (!authData.userId) {
      return redirect("/login");
    }
    return {};
  });
};

export default remixAppLoader;
