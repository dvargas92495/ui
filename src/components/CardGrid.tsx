import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
  title: {
    marginTop: 0,
  }
});

const CardGrid: React.FunctionComponent<{
  items: { image: string; title: string; description: string; href: string }[];
}> = ({ items }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {items.map(({ image, title, description, href }) => (
        <Grid item xs={2}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h6" className={classes.title}>
                <Link href={href}>{title}</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
