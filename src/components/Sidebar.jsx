import React from "react";
import cat3 from "../assets/cat3.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className="sidebar">
      <h2>MyPortfolio and stuff</h2>
      <img className="avatar" src={cat3} alt="" />
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>{" "}
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>{" "}
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>
    </div>
  );
};

export default SideBar;
