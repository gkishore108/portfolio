import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#422b2c",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "black",
    lineHeight: 1,
    padding: "0.5rem 0 0.5rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tan",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#00AAE2",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography className={classes.heading} variant="h4" align="center">
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012-2014
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography className={classes.subHeading} variant="h5">
              Program Analyst
            </Typography>
            <Typography variant="body1" style={{ color: "tomato" }}>
              Cognizant Technology Solutions
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Worked with Content Management System for Western Union using
              Teamsite/Livesite
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015-2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography className={classes.subHeading} variant="h5">
              Wordpress Developer
            </Typography>
            <Typography variant="body1" style={{ color: "tomato" }}>
              CounterFlow Marketing
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              Worked with various clients buiding cool websites using wordpress,
              php, sql
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography className={classes.subHeading} variant="h5">
              Backend Developer and Analyst
            </Typography>
            <Typography variant="body1" style={{ color: "tomato" }}>
              RockMyRun
            </Typography>
            <Typography variant="subtitle1" style={{ color: "tan" }}>
              ChatBot backend API developer
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
