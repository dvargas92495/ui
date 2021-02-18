import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import { isBrowser } from "react-device-detect";
import H6 from "./H6";

type Sponsor = { title: string; imgSrc: string; url: string };

const ThankYou: React.FunctionComponent<{ sponsors: Sponsor[] }> = ({
  sponsors,
}) => (
  <Grid container style={{ margin: "16px 0" }} spacing={1}>
    {sponsors.map(({ title, imgSrc, url }) => (
      <Grid item xs={isBrowser ? 3 : 4} key={title}>
        <Card
          style={{
            textAlign: "center",
            minHeight: 250,
          }}
        >
          <img src={imgSrc} alt={title} style={{ width: "100%" }} />
          <H6>
            {url ? (
              <Link href={url} target="_blank" rel="noopener">
                {title}
              </Link>
            ) : (
              title
            )}
          </H6>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default ThankYou;
