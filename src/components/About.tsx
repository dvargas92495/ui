import React from "react";
import Box from "@mui/material/Box";
import Body from "./Body";
import H1 from "./H1";
import H6 from "./H6";

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
  </Box>
);

export default About;
