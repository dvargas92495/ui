import Grid, { GridSize } from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";

const PreviewMedia = styled(CardMedia)({
  borderRadius: 4,
});

const PreviewContainer = styled("div")({
  padding: 8,
  position: "relative",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const PreviewOverlay = styled("div")(({ theme }) => ({
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
}));

const Preview: React.FunctionComponent<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
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
    <PreviewContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      <PreviewMedia image={image} title={title} style={{ height }} />
      <Fade in={showDescription} timeout={750}>
        <PreviewOverlay>{description}</PreviewOverlay>
      </Fade>
    </PreviewContainer>
  );
};

const StyledCard = styled(Card)({
  maxWidth: 345,
  height: "100%",
});

const StyledLink = styled(Link)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const StyledTitle = styled(Typography)({
  margin: 0,
  textAlign: "center",
});

const CardGrid: React.FunctionComponent<{
  items: { image: string; title: string; description: string; href: string }[];
  width: GridSize;
}> = ({ items, width }) => {
  return (
    <Grid container spacing={2}>
      {items.map(({ image, title, description, href }) => (
        <Grid item xs={width} key={title}>
          <StyledCard>
            <StyledLink href={href}>
              <Preview title={title} description={description} image={image} />
              <CardContent sx={{ p: 1 }}>
                <StyledTitle variant="h6">{title}</StyledTitle>
              </CardContent>
            </StyledLink>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
