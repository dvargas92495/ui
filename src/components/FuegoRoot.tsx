// This Component exists to separate server side specifc apis away from client side only components
import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";

const cache = createCache({ key: "css" });
cache.compat = true;

const FuegoRoot: React.FC = ({ children }) => {
  return (
    <div>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </div>
  );
};

export const generateCss = (_html: string) => {
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks,
  } = createEmotionServer(cache);
  const chunks = extractCriticalToChunks(_html);
  const styles = constructStyleTagsFromChunks(chunks);
  return _html.replace("__STYLES__", styles);
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
