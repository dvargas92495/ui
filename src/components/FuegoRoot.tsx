// This Component exists to separate server side specifc apis away from client side only components
import React from "react";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "css" });
cache.compat = true;

const FuegoRoot: React.FC = ({ children }) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export const transformHead = (head: string, body: string) => {
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks,
  } = createEmotionServer(cache);
  const emotionChunks = extractCriticalToChunks(body);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);
  return `${head}\n  ${emotionCss}`;
};

export default FuegoRoot;
