import React from 'react';
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
  paragraphs: string[];
}) => (
  <div>
    <H1>{title}</H1>
    <H6>{subtitle}</H6>
    {paragraphs.map((p, i) => (
      <Body key={i}>{p}</Body>
    ))}
  </div>
);

export default About;
