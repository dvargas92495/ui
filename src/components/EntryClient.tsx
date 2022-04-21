import React from "react";
import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";

export default () => hydrateRoot(document, <RemixBrowser />);
