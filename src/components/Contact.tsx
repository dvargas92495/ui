import React from "react";
import Body from "./Body";
import ExternalLink from "./ExternalLink";
import H2 from "./H2";

const Contact = ({ email }: { email: string }) => (
  <div>
    <H2>Contact Us</H2>
    <Body>You can email us for any bugs, issues, or ideas at {email}.</Body>
    <Body>
      Our DMs are also open on Twitter at{" "}
      <ExternalLink href={"https://twitter.com/dvargas92495"}>
        @dvargas92495
      </ExternalLink>
      .
    </Body>
  </div>
);

export default Contact;
