import React from 'react';
import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import createEmotionServer from "@emotion/server/create-instance";
import { emotionCache } from "../utils/getEmotionCache";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  // Inject MUI
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks,
  } = createEmotionServer(emotionCache);
  const chunks = extractCriticalToChunks(markup);
  const styles = constructStyleTagsFromChunks(chunks);
  const finalMarkup = markup.replace("__STYLES__", styles);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + finalMarkup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
