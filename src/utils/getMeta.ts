import type { MetaFunction } from "@remix-run/server-runtime";
import { APP_NAME } from "./constants";

const getMeta = ({
  title: pageTitle,
  description = "",
  img = "",
}: {
  title: string;
  description?: string;
  img?: string;
}): MetaFunction => () => {
  const title = `${pageTitle} | ${APP_NAME}`;
  return {
    title,
    description,
    "og:title": title,
    "og:description": description,
    "twitter:title": title,
    "twitter:description": description,
    "og:image": img,
    "twitter:image": img,
  };
};

export default getMeta;
