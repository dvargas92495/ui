const DOMAIN_NAME = (process.env.HOST || "")
  ?.replace(/https?:\/\//, "")
  .replace(/\..*$/, "");
export const APP_NAME =
  process.env.APP_NAME ||
  `${DOMAIN_NAME.slice(0, 1).toUpperCase()}${DOMAIN_NAME.slice(
    1
  ).toLowerCase()}`;
