import Grid from "@material-ui/core/Grid";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Fade from "@material-ui/core/Fade";

const usePreviewStyles = makeStyles((theme) => ({
  media: {
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
  container: {
    padding: 8,
    position: "relative",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const Preview: React.FunctionComponent<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  const classes = usePreviewStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDescription, setShowDescription] = useState(false);
  const onMouseEnter = useCallback(() => setShowDescription(true), [
    setShowDescription,
  ]);
  const onMouseLeave = useCallback(() => setShowDescription(false), [
    setShowDescription,
  ]);
  const [height, setHeight] = useState(140);
  useEffect(() => {
    const dummyImage = new Image();
    dummyImage.src = image;
    dummyImage.style.visibility = "hidden";
    dummyImage.onload = () => {
      document.body.appendChild(dummyImage);
      const { clientWidth, clientHeight } = dummyImage;
      dummyImage.remove();
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth - 16;
        const containerHeight = containerRef.current.clientHeight - 16;
        if (clientWidth / clientHeight < containerWidth / containerHeight) {
          setHeight(containerHeight);
        } else {
          setHeight((containerWidth * clientHeight) / clientWidth);
        }
      }
    };
  }, [containerRef, image]);
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes.container}
      ref={containerRef}
    >
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
        style={{ height }}
      />
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
  link: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
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
            <Link href={href} className={classes.link}>
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
