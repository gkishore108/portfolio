import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileSideDrawer from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  EmojiPeople,
  Book,
} from "@material-ui/icons";
import avatar from "../images/Avatar.png";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSilderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatarSize: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <EmojiPeople />,
    listText: "About Me",
    listPath: "/about",
  },
  {
    listIcon: <Book />,
    listText: "Skills",
    listPath: "/skills",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [sideDrawer, setSideDrawer] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setSideDrawer({ ...sideDrawer, [slider]: open });
  };

  const slider = (slider) => (
    <Box
      className={classes.menuSilderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        className={classes.avatarSize}
        src={avatar}
        alt="Kishore Gauthaman"
      />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon style={{ color: "tan" }}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              style={{ color: "tan" }}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileSideDrawer
              open={sideDrawer.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {slider("right")}
              <Footer />
            </MobileSideDrawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
