import React from "react";
import { Button, Card } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import myface from "../assets/myface.jpg";

import "../App.css";
import SideBar from "./Sidebar";

const ContactForm = () => {
  return (
    <>
      <SideBar />
      <div className="contactpage">
        <div>
          <Card className="facecard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={myface} />
            <Card.Body>
              <Card.Title>My face</Card.Title>
              <Card.Text>I like stuff and things related to that.</Card.Text>
              <Button href="https://www.linkedin.com/in/david-ahlstrom-06763518b/">
                check my linkdin
              </Button>
            </Card.Body>
          </Card>
        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h4 text-center mb-4">Write to us</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  className="grey-text">
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormContactEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactSubjectEx"
                  className="grey-text">
                  Subject
                </label>
                <input
                  type="text"
                  id="defaultFormContactSubjectEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text">
                  Your message
                </label>
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default ContactForm;
