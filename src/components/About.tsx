import React from "react";

const About = ({
  title,
  subtitle,
  paragraphs,
}: {
  title: string;
  subtitle: string;
  paragraphs: React.ReactNode[];
}) => (
  <div
    style={{
      maxWidth: "800px",
      width: "100%",
    }}
  >
    <h1>{title}</h1>
    <h6>{subtitle}</h6>
    {paragraphs.map((p, i) => (
      <p
        key={i}
        style={{
          whiteSpace: "pre-wrap",
          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        {p}
      </p>
    ))}
    <hr style={{ margin: "32px 0" }} />
    <p>
      <img
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
      <a target="_blank" rel="noopener" href={"https://davidvargas.me/projects"}>
        https://davidvargas.me/projects
      </a>
      !
    </p>
  </div>
);

export default About;
