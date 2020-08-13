import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];
  let carddetails = [
    {
      style: styles.infected,
      text: "Infected",
      value: confirmed.value,
      bottomText: "Cases of infected people of corona virus",

    },
    {
      style: styles.recovered,
      text: "Recovered",
      value: recovered.value,
      bottomText: "Cases of recoveries from corona virus",
    },
    {
      style: styles.deaths,
      text: "Deaths",
      value: deaths.value,
      bottomText: "Cases of deaths caused by corona virus",
    },
    {
      style: styles.active,
      text: "Active",
      value: active,
      bottomText: "Number of active cases of corona virus",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "0px 25.675px 0px 50px", padding: "2px" }}
          >
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textPrimary" variant="body2">{detail.bottomText}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
