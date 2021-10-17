import React from "react";
import Body from "./Body";
import H2 from "./H2";

const Contact = ({ email }: { email: string }) => (
  <>
    <H2>Contact Us</H2>
    <Body>You can email us for any bugs, issues, or ideas at {email}.</Body>
    <Body>
      Our DMs are also open on Twitter at
      [@dvargas92495](https://twitter.com/dvargas92495).
    </Body>
  </>
);

export default Contact;
