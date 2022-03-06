import createCache from "@emotion/cache";

const getEmotionCache = () => {
  const cache = createCache({ key: "css" });
  cache.compat = true;
  return cache;
};

export const emotionCache = getEmotionCache();

export default getEmotionCache;
