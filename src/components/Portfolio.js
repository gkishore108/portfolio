import React, { useState } from "react";
import Navbar from "./Navbar";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import project1 from "../images/project1.PNG";

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "tan",
    background: "#222",
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    // background: "tan",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  indicator: {
    backgroundColor: "tomato",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <AppBar position="relative" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            classes={{ indicator: classes.indicator }}
          >
            <Tab label="Wordpress" {...a11yProps(0)} />
            <Tab label="JS" {...a11yProps(1)} />
            <Tab label="Shopify" {...a11yProps(2)} />
            <Tab label="React-JS" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* Project 1 */}
            <Grid>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="project1"
                    height="140"
                    image={project1}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Happy People Win
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem IpsunLorem
                      IpsunLorem IpsunLorem Ipsun Lorem IpsunLorem IpsunLorem
                      IpsunLorem IpsunLorem IpsunLorem Ipsun Lorem IpsunLorem
                      IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun Lorem
                      IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* Project 2 */}
            <Grid>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="project1"
                    height="140"
                    image={project1}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      RockMyRun
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem IpsunLorem
                      IpsunLorem IpsunLorem Ipsun Lorem IpsunLorem IpsunLorem
                      IpsunLorem IpsunLorem IpsunLorem Ipsun Lorem IpsunLorem
                      IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun Lorem
                      IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Box>
  );
};

export default Portfolio;
