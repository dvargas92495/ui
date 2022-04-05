const getAppName = () => {
  const DOMAIN_NAME = (process.env.HOST || "")
    ?.replace(/https?:\/\//, "")
    .replace(/\..*$/, "");
  return (
    process.env.APP_NAME ||
    `${DOMAIN_NAME.slice(0, 1).toUpperCase()}${DOMAIN_NAME.slice(
      1
    ).toLowerCase()}`
  );
};

export default getAppName;
