import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Popover,
} from "@material-ui/core";

import {
  QuestionAnswer,
  BorderColor,
  Public,
  Code,
  Drafts,
} from "@material-ui/icons";

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
    margin: "1.2rem auto",
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
  card: {
    background: "#222",
    borderRadius: "13px",
  },
  header: {
    color: "tan",
    fontWeight: 900,
    textTransform: "uppercase",
    textShadow: "1.5px 1.3px #00AAE2",
  },
  popover: {
    width: 350,
    backgroundColor: "#F7F9FB",
    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  item1: {
    flex: 1,
  },
  item2: {
    padding: 10,
    color: "#8FC1E3",
    fontSize: 18,
  },
}));

const Process = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id = open ? "simple-popover" : undefined;
  const id1 = open1 ? "simple-popover" : undefined;
  const id2 = open2 ? "simple-popover" : undefined;
  const id3 = open3 ? "simple-popover" : undefined;

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
        <div>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            style={{ minHeight: "50vh" }}
          >
            <Grid item xs={6} md={3}>
              <Card className={classes.card}>
                <CardHeader
                  title="Phase 1"
                  classes={{ root: classes.header }}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                  <Typography gutterBottom style={{ color: "tan", padding: 0 }}>
                    Understand Requirements
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  style={{
                    justifyContent: "center",
                    padding: 0,
                  }}
                >
                  <IconButton ariaLabel="Learn More" onClick={handleClick}>
                    <QuestionAnswer style={{ color: "tomato" }} />
                  </IconButton>
                </CardActions>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  anchorPosition={{ top: 200, left: 400 }}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography>
                    <div className={classes.popover}>
                      <div className={classes.item1}>
                        <Drafts style={{ color: "#5085A5", fontSize: 55 }} />
                      </div>
                      <div className={classes.item2}>
                        <p>
                          I need to get a clear picture of what you need. This
                          gives me enough clarity to ultimately apply my skills
                          to your needs.
                        </p>
                      </div>
                    </div>
                  </Typography>
                </Popover>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card className={classes.card}>
                <CardHeader
                  title="Phase 2"
                  classes={{ root: classes.header }}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                  <Typography gutterBottom style={{ color: "tan", padding: 0 }}>
                    Design Wireframes
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  style={{
                    justifyContent: "center",
                    padding: 0,
                  }}
                >
                  <IconButton ariaLabel="Learn More" onClick={handleClick1}>
                    <BorderColor style={{ color: "tomato" }} />
                  </IconButton>
                </CardActions>
                <Popover
                  id={id1}
                  open={open1}
                  anchorEl={anchorEl1}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography>The content of the Popover.</Typography>
                </Popover>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card className={classes.card}>
                <CardHeader
                  title="Phase 3"
                  classes={{ root: classes.header }}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                  <Typography gutterBottom style={{ color: "tan", padding: 0 }}>
                    Develop
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  style={{
                    justifyContent: "center",
                    padding: 0,
                  }}
                >
                  <IconButton ariaLabel="Learn More" onClick={handleClick2}>
                    <Code style={{ color: "tomato" }} />
                  </IconButton>
                </CardActions>
                <Popover
                  id={id2}
                  open={open2}
                  anchorEl={anchorEl2}
                  onClose={handleClose2}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography>The content of the Popover.</Typography>
                </Popover>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card className={classes.card}>
                <CardHeader
                  title="Phase 4"
                  classes={{ root: classes.header }}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                  <Typography gutterBottom style={{ color: "tan", padding: 0 }}>
                    Deploy
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  style={{
                    justifyContent: "center",
                    padding: 0,
                  }}
                >
                  <IconButton ariaLabel="Learn More" onClick={handleClick3}>
                    <Public style={{ color: "tomato" }} />
                  </IconButton>
                </CardActions>
                <Popover
                  id={id3}
                  open={open3}
                  anchorEl={anchorEl3}
                  onClose={handleClose3}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography>The content of the Popover.</Typography>
                </Popover>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default Process;
