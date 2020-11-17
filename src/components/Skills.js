import React from "react";
import Navbar from "./Navbar";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { skills } from "../data/skillsData";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  heading: {
    color: "tan",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  card: {
    maxWidth: 345,
    maxHeight: 900,
    overflow: "scroll",
    margin: "2rem 1rem",
    background: "#511",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  backendCard: {
    maxWidth: 345,
    maxHeight: 700,
    overflow: "scroll",
    margin: "2rem 1rem",
    background: "#511",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  databaseCard: {
    maxWidth: 345,
    maxHeight: 600,
    overflow: "scroll",
    margin: "2rem 1rem",
    background: "#511",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  versionCard: {
    maxWidth: 345,
    maxHeight: 300,
    overflow: "scroll",
    margin: "2rem 1rem",
    background: "#511",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cmsCard: {
    maxWidth: 345,
    maxHeight: 500,
    overflow: "scroll",
    margin: "2rem 1rem",
    background: "#511",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardTitle: {
    fontSize: "2em",
    fontWeight: "700",
  },
  hr: {
    border: "0",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
  },
  listItemText: {
    fontSize: "1.7em",
    margin: "2rem",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box>
        <Typography className={classes.heading} variant="h4" align="center">
          My Skills
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <Card variant="outlined" className={classes.card}>
            <CardContent margin="auto">
              <Typography
                variant="h4"
                align="center"
                style={{ color: "tomato" }}
              >
                Frontend
              </Typography>
              <hr className={classes.hr} />
              {skills.frontend.map((skill, index) => (
                <List key={index} button>
                  <ListItem>
                    <ListItemIcon>
                      <img src={skill.imgSrc} alt={skill.imgAltText} />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      style={{ color: "tan" }}
                      primary={skill.skillName}
                    />
                  </ListItem>
                </List>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4} container direction="column">
          <Grid item>
            <Card variant="outlined" className={classes.backendCard}>
              <CardContent margin="auto">
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: "tomato" }}
                >
                  Backend
                </Typography>
                <hr className={classes.hr} />
                {skills.backend.map((skill, index) => (
                  <List key={index} button>
                    <ListItem>
                      <ListItemIcon>
                        <img src={skill.imgSrc} alt={skill.imgAltText} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.listItemText }}
                        style={{ color: "tan" }}
                        primary={skill.skillName}
                      />
                    </ListItem>
                  </List>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card variant="outlined" className={classes.cmsCard}>
              <CardContent margin="auto">
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: "tomato" }}
                >
                  Content Management System
                </Typography>
                <hr className={classes.hr} />
                {skills.cms.map((skill, index) => (
                  <List key={index} button>
                    <ListItem>
                      <ListItemIcon>
                        <img src={skill.imgSrc} alt={skill.imgAltText} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.listItemText }}
                        style={{ color: "tan" }}
                        primary={skill.skillName}
                      />
                    </ListItem>
                  </List>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item md={4} container direction="column">
          <Grid item>
            <Card variant="outlined" className={classes.databaseCard}>
              <CardContent margin="auto">
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: "tomato" }}
                >
                  Database
                </Typography>
                <hr className={classes.hr} />
                {skills.database.map((skill, index) => (
                  <List key={index} button>
                    <ListItem>
                      <ListItemIcon>
                        <img src={skill.imgSrc} alt={skill.imgAltText} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.listItemText }}
                        style={{ color: "tan" }}
                        primary={skill.skillName}
                      />
                    </ListItem>
                  </List>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card variant="outlined" className={classes.versionCard}>
              <CardContent margin="auto">
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: "tomato" }}
                >
                  Version Control
                </Typography>
                <hr className={classes.hr} />
                {skills.versionControl.map((skill, index) => (
                  <List key={index} button>
                    <ListItem>
                      <ListItemIcon>
                        <img src={skill.imgSrc} alt={skill.imgAltText} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.listItemText }}
                        style={{ color: "tan" }}
                        primary={skill.skillName}
                      />
                    </ListItem>
                  </List>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
