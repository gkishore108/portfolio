import React from "react";
import Navbar from "./Navbar";
import Process from "./Process";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import avatar from "../images/Avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    color: "tan",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  frontCardContainer: {
    maxWidth: 345,
    height: 500,
    margin: "1rem 2rem",
    background: "#422b2c",
    borderRadius: "16px",
  },
  backCardContainer: {
    maxWidth: 345,
    height: 500,
    margin: "1rem 2rem",
    borderRadius: "16px",
    background: "#222",
  },
  cardMedia: {
    height: 250,
  },
  flip: {
    cursor: "pointer",
    position: "relative",
    "&:hover > div": {
      transform: "rotateY(180deg)",
    },
  },
  flipInner: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  flipFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  flipBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  hr: {
    border: "0",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))",
  },
  //   secondGrid: {
  //     [theme.breakpoints.down("xs")]: {
  //       //   position: "relative",
  //       //   bottom: "2%",
  //       //   left: "1%",
  //       width: "100%",
  //     },
  //   },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Typography className={classes.heading} variant="h4" align="center">
        About Me
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box component="div" className={classes.flip}>
              <Box component="div" className={classes.flipInner}>
                <Box component="div" className={classes.flipFront}>
                  <Card className={classes.frontCardContainer}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={avatar}
                      title="Kishore"
                    />
                    <hr className={classes.hr} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h2"
                        style={{ color: "tan" }}
                      >
                        Kishore Gauthaman
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{ color: "tan" }}
                        component="p"
                      >
                        <span style={{ color: "#00AAE2" }}>
                          Freelance Full Stack Web Developer{" "}
                        </span>
                        with 6 years of experience in this field. I enjoy
                        building beautiful, functional websites & web
                        applications.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box component="div" className={classes.flipBack}>
                  <Card className={classes.backCardContainer}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ color: "tomato" }}
                      >
                        Education
                      </Typography>
                      <hr className={classes.hr} />
                      <br />
                      <Typography
                        variant="h5"
                        component="h2"
                        style={{ color: "tan", fontWeight: "700" }}
                      >
                        2007 - 2011
                      </Typography>
                      <br />
                      <Typography
                        variant="h6"
                        component="h2"
                        style={{ color: "tan" }}
                      >
                        Bachelor of Engineering, Computer Science
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="h2"
                        style={{ color: "tan" }}
                      >
                        Anna University, Chennai, India
                      </Typography>
                      <br />
                      <Typography
                        variant="h5"
                        component="h2"
                        style={{ color: "tan", fontWeight: "700" }}
                      >
                        2014 - 2016
                      </Typography>
                      <br />
                      <Typography
                        variant="h6"
                        component="h2"
                        style={{ color: "tan" }}
                      >
                        Master of Science, Information Systems
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="h2"
                        style={{ color: "tan" }}
                      >
                        San Diego State University, San Diego, California
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Process />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
