import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: "100%",
    height: 500,
    margin: "1rem 2rem",
    background: "#422b2c",
    borderRadius: "16px",
  },
}));

const Process = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardContainer}>
        <Typography
          variant="h5"
          component="h2"
          style={{ color: "tomato" }}
        ></Typography>
      </Card>
    </div>
  );
};

export default Process;
