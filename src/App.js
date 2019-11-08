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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
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
  const classes = useStyles();

  return (
    <>
      <div className="container1">
        <Avatar alt="Remy Sharp" src={cat3} className={classes.bigAvatar} />
        <div className="sidebar">this is my sidebar</div>
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
