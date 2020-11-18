import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: "100%",
    height: 500,
    margin: "1rem 2rem",
    background: "#00091B",
    borderRadius: "16px",
    textAlign: "center",
    paddingTop: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  hr: {
    border: "0",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "-100vh",
    fontFamily: "consolas",
  },
  wavy: {
    position: "relative",
    WebkitBoxReflect:
      "below -12px linear-gradient(transparent, rgba(0,0,0,0.2))",
    "& span": {
      position: "relative",
      display: "inline-block",
      color: "#00AAE2",
      fontSize: "1.3rem",
      fontWeight: 900,
      textTransform: "uppercase",
      animation: "$animate 3s ease-in-out infinite",
      animationDelay: "calc(0.1s * var(--i))",
    },
  },
  "@keyframes animate": {
    "0%": {
      transform: "translateY(0px)",
    },
    "20%": {
      transform: "translateY(-20px)",
    },
    "40%": {
      transform: "translateY(0px)",
    },
    "60%": {
      transform: "translateY(0px)",
    },
    "80%": {
      transform: "translateY(0px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));

const Process = () => {
  const classes = useStyles();
  const style = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
  ].map((i) => ({ "--i": i }));
  const title = [
    "W",
    "I",
    "R",
    "E",
    "F",
    "R",
    "A",
    "M",
    "E ",
    "->",
    " C",
    "O",
    "D",
    "E ",
    "->",
    " D",
    "E",
    "P",
    "L",
    "O",
    "Y",
  ];

  const span = title.map((i, j) => <span style={style[j]}>{i}</span>);

  return (
    <div>
      <Card className={classes.cardContainer}>
        <Typography variant="h5" component="h2" style={{ color: "tan" }}>
          My Process
        </Typography>
        <hr className={classes.hr} />
        <div className={classes.container}>
          <div className={classes.wavy}>{span}</div>
        </div>
      </Card>
    </div>
  );
};

export default Process;
