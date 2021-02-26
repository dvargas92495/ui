import Grid from "@material-ui/core/Grid";
import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "100%",
  },
  media: {
    height: 140,
  },
  title: {
    marginTop: 0,
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

const CardGrid: React.FunctionComponent<{
  items: { image: string; title: string; description: string; href: string }[];
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ items, width }) => {
  const classes = useStyles();
  const [showDescription, setShowDescription] = useState(false);
  const onMouseEnter = useCallback(() => setShowDescription(true), [
    setShowDescription,
  ]);
  const onMouseLeave = useCallback(() => setShowDescription(false), [
    setShowDescription,
  ]);
  return (
    <Grid container spacing={2}>
      {items.map(({ image, title, description, href }) => (
        <Grid item xs={width}>
          <Card className={classes.root}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
              <Fade in={showDescription} timeout={1000}>
                <div className={classes.overlay}>{description}</div>
              </Fade>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h6" className={classes.title}>
                <Link href={href}>{title}</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
