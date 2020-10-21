import Link from "@material-ui/core/Link";
import React from "react";

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} target="_blank" rel="noopener">
    {children}
  </Link>
);

export default ExternalLink;
