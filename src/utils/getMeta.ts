import type { MetaFunction } from "remix";

const DOMAIN_NAME = (process.env.HOST || "")
  ?.replace(/https?:\/\//, "")
  .replace(/\..*$/, "");
const APP_NAME =
  process.env.APP_NAME ||
  `${DOMAIN_NAME.slice(0, 1).toUpperCase()}${DOMAIN_NAME.slice(
    1
  ).toLowerCase()}`;

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
