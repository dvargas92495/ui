import type { AppConfig } from "@remix-run/dev/config";

const getRemixConfig = (): AppConfig => ({
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
});

export default getRemixConfig;
