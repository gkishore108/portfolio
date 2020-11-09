import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box, Grid } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/Avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    fontWeight: 500,
  },
  subTitle: {
    fontWeight: 700,
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Kishore Gauthaman"]} typeSpeed={40} />
      </Typography>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Kishore Gauthaman"
        />
      </Grid>
      <br />
      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={[
            "Web Developer",
            "Full Stack Developer",
            "Shopify Developer",
            "Wordpress Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
