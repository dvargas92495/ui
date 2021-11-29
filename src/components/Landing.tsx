import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { SVGAttributes } from "react";
import Button from "@mui/material/Button";
import H4 from "./H4";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import H6 from "./H6";

const LogoContainer = styled(Grid)({
  width: "100%",
  textAlign: "center",
});

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
  const StyledLogo = styled(Logo)({
    width: "100%",
    height: "100%",
  });
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
          href={`/${primaryHref}`}
          sx={{ m: 2 }}
        >
          <Typography variant="h6" sx={{ m: 0 }}>
            Getting Started
          </Typography>
        </Button>
        <Button
          variant={"outlined"}
          color="primary"
          href={`/${secondaryHref}`}
          sx={{ m: 2 }}
        >
          <Typography variant="h6" sx={{ m: 0 }}>
            Explore
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={1} />
      <LogoContainer item xs={5}>
        <StyledLogo />
      </LogoContainer>
    </Grid>
  );
};

const StyledCard = styled(Card)({
  height: 350,
});
const BreakTitle = styled("div")({
  textAlign: "center",
});
const StyledMedia = styled(CardMedia)(({ theme }) => ({
  height: 160,
  backgroundSize: "contain",
  margin: theme.spacing(2),
}));

export const Showcase = ({
  header,
  showCards,
}: {
  header: string;
  showCards: { title: string; description: string; image: string }[];
}) => {
  return (
    <>
      <BreakTitle>
        <H4>{header}</H4>
      </BreakTitle>
      <Grid container alignItems="flex-start" justifyContent={"center"} spacing={2}>
        {showCards.map((b) => (
          <Grid item xs={4} key={b.title}>
            <StyledCard>
              <CardHeader title={b.title} />
              <StyledMedia title={b.title} image={b.image} />
              <CardContent>{b.description}</CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const Stats = ({
  statHeader,
  statSubheader,
  stats,
}: {
  statHeader: string;
  statSubheader: string;
  stats: { value: string; label: string }[];
}) => {
  return (
    <>
      <H4>{statHeader}</H4>
      <H6>{statSubheader}</H6>
      <Grid
        container
        alignItems="flex-start"
        spacing={8}
        justifyContent="space-evenly"
      >
        {stats.map((s) => (
          <Grid item xs={3} key={s.label}>
            <H4>{s.value}</H4>
            <H6 sx={{ m: 0 }}>{s.label}</H6>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

// const useStyles = makeStyles((theme) => ({
const LandingRoot = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(-8),
  width: "100%",
}));

const LandingContent = styled("div")<{ index: number }>(({ theme, index }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: "center",
  background:
    index % 4 === 0
      ? alpha(theme.palette.secondary.light, 0.25)
      : index % 4 === 2
      ? alpha(theme.palette.primary.light, 0.25)
      : "inherit",
}));

const Landing = ({ children }: { children: React.ReactNodeArray }) => {
  return (
    <LandingRoot>
      <style>{`main.main {
  width: 100%;
  max-width: unset;
}`}</style>
      {children.map((c, i) => (
        <LandingContent index={i} key={i}>
          <Container maxWidth={"lg"}>{[c]}</Container>
        </LandingContent>
      ))}
    </LandingRoot>
  );
};

export default Landing;
