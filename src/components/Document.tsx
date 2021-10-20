import React from "react";
import ThemeProvider from "./ThemeProvider";
import { ClerkProvider } from "@clerk/clerk-react";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "css" });
const {
  extractCriticalToChunks,
  constructStyleTagsFromChunks,
} = createEmotionServer(cache);

const Document: React.FC = ({ children }) => {
  return (
    <ClerkProvider frontendApi={process.env.CLERK_FRONTEND_API} authVersion={2}>
      <CacheProvider value={cache}>
        <ThemeProvider>{children}</ThemeProvider>
      </CacheProvider>
    </ClerkProvider>
  );
};

export const Head = ({
  html,
  title,
  description = title,
  img,
  styles,
}: {
  html: string;
  title: string;
  description?: string;
  img?: string;
  styles?: string;
}): React.ReactElement => {
  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={"summary"} />
      <meta name="twitter:creator" content="@dvargas92495" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="og:image" content={img} />
      <meta name="twitter:image" content={img} />
      {emotionCss}
      {styles && <style>{styles}</style>}
    </>
  );
};

export default Document;
