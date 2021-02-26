import Grid from "@material-ui/core/Grid";
import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Fade from "@material-ui/core/Fade";

const usePreviewStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    borderRadius: 4,
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,0.95)",
    color: theme.palette.text.secondary,
    justifyContent: "center",
    left: 0,
    padding: 10,
    textAlign: "center",
    top: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
  },
}));

const Preview: React.FunctionComponent<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  const classes = usePreviewStyles();
  const [showDescription, setShowDescription] = useState(false);
  const onMouseEnter = useCallback(() => setShowDescription(true), [
    setShowDescription,
  ]);
  const onMouseLeave = useCallback(() => setShowDescription(false), [
    setShowDescription,
  ]);
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ padding: 8, position: "relative" }}
    >
      <CardMedia className={classes.media} image={image} title={title} />
      <Fade in={showDescription} timeout={750}>
        <div className={classes.overlay}>{description}</div>
      </Fade>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "100%",
  },
  title: {
    margin: 0,
    textAlign: "center",
  },
  content: {
    padding: theme.spacing(1),
  },
}));

const CardGrid: React.FunctionComponent<{
  items: { image: string; title: string; description: string; href: string }[];
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ items, width }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {items.map(({ image, title, description, href }) => (
        <Grid item xs={width} key={title}>
          <Card className={classes.root}>
            <Link href={href}>
              <Preview title={title} description={description} image={image} />
              <CardContent className={classes.content}>
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
