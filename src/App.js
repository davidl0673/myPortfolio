import React from "react";
import {
  Button,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Jumbotron,
  Card
} from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import JumbotronPage from "./components/JumbotronPage";
import ContactPage from "./pages/Contact";
import Projects from "./components/Projects";
import Avatar from "@material-ui/core/Avatar";
import cat3 from "./assets/cat3.jpg";

import "./App.css";
import SideBar from "./components/Sidebar";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My portfolio and stuff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              {" "}
              <Link to="/"> home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/contact">{" Contact"}</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const Jumbofun = () => {
  return (
    <Jumbotron className="jumbofun">
      <h1>Welcome to my portfolio</h1>
      <p>monotonectally target world-class networks</p>
    </Jumbotron>
  );
};

const Home = () => {
  return (
    <>
      <div className="container1">
        <SideBar />
        <div className="homepage">
          <Jumbofun />
          <JumbotronPage />
          <Projects />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper">
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={ContactPage} />
      </AnimatedSwitch>
    </Router>
  );
};
export default App;
