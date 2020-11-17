import React, { useState } from "react";
import {} from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import {
  PermPhoneMsg,
  Facebook,
  LinkedIn,
  GitHub,
  Email,
} from "@material-ui/icons";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
  root: {
    height: 0,
    flexGrow: 1,
  },
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
}));

const ContactMe = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<PermPhoneMsg />);

  const actions = [
    {
      icon: (
        <Facebook
          style={{ fill: "#3B5998" }}
          //   onClick={() => handleClick("Facebook")}
        />
      ),
      name: "Facebook",
    },
    {
      icon: (
        <LinkedIn
          style={{ fill: "#0e76a8" }}
          //   onClick={() => handleClick("Facebook")}
        />
      ),
      name: "LinkedIn",
    },
    {
      icon: (
        <GitHub
          style={{ fill: "#000" }}
          //   onClick={() => handleClick("Facebook")}
        />
      ),
      name: "GitHub",
    },
    {
      icon: (
        <Email
          style={{ fill: "#000" }}
          //   onClick={() => handleClick("Facebook")}
        />
      ),
      name: "Email",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
    setIcon(<PermPhoneMsg style={{ fill: "tomato" }} />);
  };

  const handleClose = () => {
    setOpen(false);
    setIcon(<PermPhoneMsg />);
  };

  return (
    <div className="classes.root">
      <SpeedDial
        ariaLabel="Contact Me"
        className={classes.speedDial}
        icon={icon}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: "default",
          size: "medium",
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            id={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="right"
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default ContactMe;
