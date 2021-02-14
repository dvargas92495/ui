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

const useSplashStyles = makeStyles((theme) => ({
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
    margin: 0,
  },
}));

export const Splash = ({
  Logo,
  title,
  subtitle,
  primaryHref,
  secondaryHref,
}: {
  Logo: React.FunctionComponent<SVGAttributes<{}>>;
  title: string;
  subtitle: string;
  primaryHref: string;
  secondaryHref: string;
}) => {
  const classes = useSplashStyles();
  return (
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
  );
};

const useShowStyles = makeStyles((theme) => ({
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

export const Showcase = ({
  header,
  showCards,
}: {
  header: string;
  showCards: { title: string; description: string; image: string }[];
}) => {
  const classes = useShowStyles();
  return (
    <>
      <div className={classes.breakTitle}>
        <H4>{header}</H4>
      </div>
      <Grid container alignItems="flex-start" spacing={2}>
        {showCards.map((b) => (
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
    </>
  );
};

const useStatStyles = makeStyles(() => ({
  marginLessLabel: {
    marginBottom: 0,
  },
}));

export const Stats = ({
  statHeader,
  statSubheader,
  stats,
}: {
  statHeader: string;
  statSubheader: string;
  stats: { value: string; label: string }[];
}) => {
  const classes = useStatStyles();
  return (
    <>
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
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-8),
    width: "100%",
  },
  secondaryContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: fade(theme.palette.secondary.light, 0.25),
  },
  breakContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    textAlign: "center",
  },
  primaryContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: fade(theme.palette.primary.light, 0.25),
    textAlign: "center",
  },
}));

const Landing = ({ children }: { children: React.ReactNodeArray }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children.map((c, i) => (
        <div
          className={
            i % 4 === 0
              ? classes.secondaryContent
              : i % 4 === 2
              ? classes.primaryContent
              : classes.breakContent
          }
          key={i}
        >
          <Container maxWidth={"lg"}>{[c]}</Container>
        </div>
      ))}
    </div>
  );
};

export default Landing;
