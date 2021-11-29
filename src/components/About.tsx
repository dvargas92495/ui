import React from "react";
import Box from "@mui/material/Box";
import Body from "./Body";
import H1 from "./H1";
import H6 from "./H6";
import ExternalLink from "./ExternalLink";

const About = ({
  title,
  subtitle,
  paragraphs,
}: {
  title: string;
  subtitle: string;
  paragraphs: React.ReactNode[];
}) => (
  <Box
    sx={{
      maxWidth: "800px",
      width: "100%",
    }}
  >
    <H1>{title}</H1>
    <H6>{subtitle}</H6>
    {paragraphs.map((p, i) => (
      <Body key={i} sx={{ whiteSpace: "pre-wrap", my: "1em" }}>
        {p}
      </Body>
    ))}
    <hr style={{ margin: "32px 0" }} />
    <Body>
      <Box
        component={"img"}
        src="https://pbs.twimg.com/profile_images/1272885092545896450/VaEFChlf_400x400.jpg"
        style={{
          borderRadius: "80px",
          width: "160px",
          display: "inline-grid",
          marginRight: "16px",
          float: "left",
        }}
      />
      {title} is part of the Vargas Arts portfolio of projects. Check out some
      of my other projects at{" "}
      <ExternalLink href={"https://davidvargas.me/projects"}>
        https://davidvargas.me/projects
      </ExternalLink>
      !
    </Body>
  </Box>
);

export default About;
