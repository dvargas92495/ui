import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import { isBrowser } from "react-device-detect";
import Subtitle from "./Subtitle";

type Sponsor = { title: string; imgSrc: string; url: string };

const ThankYou: React.FunctionComponent<{ sponsors: Sponsor[] }> = ({
  sponsors,
}) => (
  <Grid container style={{ margin: "16px 0" }} spacing={1}>
    {sponsors.map(({ title, imgSrc, url }) => (
      <Grid item xs={isBrowser ? 1 : 4} key={title}>
        <Card
          style={{
            textAlign: "center",
            minHeight: 108,
          }}
        >
          <img src={imgSrc} alt={title} style={{ width: "100%" }} />
          <Subtitle style={{ fontSize: "0.5em" }}>
            {url ? (
              <Link href={url} target="_blank" rel="noopener">
                {title}
              </Link>
            ) : (
              title
            )}
          </Subtitle>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default ThankYou;
