import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";
import React, { SVGAttributes } from "react";
import Button from "@material-ui/core/Button";
import { BASE_PATH } from "./util";
import H4 from "./H4";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import H6 from "./H6";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-8),
    width: "100%",
  },
  initialContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: fade(theme.palette.secondary.light, 0.25),
  },
  breakContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  statContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: fade(theme.palette.primary.light, 0.25),
    color: theme.palette.getContrastText(theme.palette.primary.light),
    textAlign: "center",
  },
  restContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    textAlign: "center",
    width: "fit-content",
  },
  logoContainer: {
    width: "100%",
    textAlign: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
  marginLessLabel: {
    marginBottom: 0,
  },
  card: {
    height: 350,
  },
  breakTitle: {
    textAlign: "center",
  },
  media: {
    height: 160,
    backgroundSize: "contain",
    margin: theme.spacing(2),
  },
}));

const Landing = ({
  Logo,
  title,
  subtitle,
  primaryHref,
  secondaryHref,
  breakHeader,
  breakCards,
  statHeader,
  statSubheader,
  stats,
  children,
}: {
  Logo: React.FunctionComponent<SVGAttributes<{}>>;
  title: string;
  subtitle: string;
  primaryHref: string;
  secondaryHref: string;
  breakHeader: string;
  breakCards: { title: string; description: string; image: string }[];
  statHeader: string;
  statSubheader: string;
  stats: { value: string; label: string }[];
  children: React.ReactNodeArray;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.initialContent}>
        <Container maxWidth={"lg"}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h1">{title}</Typography>
              <Typography variant="subtitle1">
                <i>{subtitle}</i>
              </Typography>
              <Button
                variant={"contained"}
                color="primary"
                href={`${BASE_PATH}${primaryHref}`}
                className={classes.button}
              >
                <Typography variant="h6" className={classes.marginLessLabel}>
                  Getting Started
                </Typography>
              </Button>
              <Button
                variant={"outlined"}
                color="primary"
                href={`${BASE_PATH}${secondaryHref}`}
                className={classes.button}
              >
                <Typography variant="h6" className={classes.marginLessLabel}>
                  Explore
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5} className={classes.logoContainer}>
              <Logo className={classes.logo} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth={"lg"} className={classes.breakContent}>
        <div className={classes.breakTitle}>
          <H4>{breakHeader}</H4>
        </div>
        <Grid container alignItems="flex-start" spacing={2}>
          {breakCards.map((b) => (
            <Grid item xs={4} key={b.title}>
              <Card className={classes.card}>
                <CardHeader title={b.title} />
                <CardMedia
                  title={b.title}
                  image={b.image}
                  className={classes.media}
                />
                <CardContent>{b.description}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.statContent}>
        <Container maxWidth={"lg"}>
          <H4>{statHeader}</H4>
          <H6>{statSubheader}</H6>
          <Grid
            container
            alignItems="flex-start"
            spacing={8}
            justify="space-evenly"
          >
            {stats.map((s) => (
              <Grid item xs={3} key={s.label}>
                <H4>{s.value}</H4>
                <H6 className={classes.marginLessLabel}>{s.label}</H6>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Container maxWidth={"lg"} className={classes.restContent}>
        {children}
      </Container>
    </div>
  );
};

export default Landing;
