import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <hr />
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Vargas Arts, LLC
      </Typography>
    </footer>
  );
};

export default Footer;
