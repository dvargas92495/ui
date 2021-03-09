import React from "react";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

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
