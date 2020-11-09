import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  particleCanva: {
    position: "absolute",
    opacity: 0.3,
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#00AAE2",
    borderColor: "#00AAE2",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tomato",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Particles
        canvasClassName={classes.particleCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                opacity_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: false,
            },
          },
        }}
      />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              Hire Me
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: "tan" } }}
              size="medium"
              margin="dense"
            />
            <br />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "tan" } }}
              size="medium"
              margin="dense"
            />
            <br />
            <br />
            <InputField
              fullWidth={true}
              label="Enter Message"
              multiline
              rows={4}
              variant="outlined"
              inputProps={{ style: { color: "tan" } }}
              size="medium"
              margin="dense"
            />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
