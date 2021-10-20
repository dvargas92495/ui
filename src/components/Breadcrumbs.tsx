import React from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Breadcrumbs: React.FunctionComponent<{
  links: { text: string; href: string }[];
  page: string;
}> = ({ links, page }) => {
  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {links.map(({ text, href }) => (
        <Link color="inherit" href={href} key={text}>
          {text}
        </Link>
      ))}
      <Typography color="textPrimary" style={{ margin: 0 }}>
        {page}
      </Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
