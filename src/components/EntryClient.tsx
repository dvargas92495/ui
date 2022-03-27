import React from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";

export default () =>
  hydrate(
      // TODO fix types here, what's going on...
    ((<RemixBrowser />) as unknown) as React.ReactElement[],
    (document as unknown) as Element
  );
