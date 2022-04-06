import React from "react";

const Contact = ({ email }: { email: string }) => (
  <div
    style={{
      maxWidth: "800px",
      width: "100%",
    }}
  >
    <h2>Contact Us</h2>
    <p>You can email us for any bugs, issues, or ideas at {email}.</p>
    <p>
      Our DMs are also open on Twitter at{" "}
      <a
        target="_blank"
        rel="noopener"
        href={"https://twitter.com/dvargas92495"}
      >
        @dvargas92495
      </a>
      .
    </p>
  </div>
);

export default Contact;
