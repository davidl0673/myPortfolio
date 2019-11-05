import React from "react";
import { Jumbotron } from "react-bootstrap";

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Welcome</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Please like me
              </MDBCardTitle>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="google.com">
                    <MDBIcon
                      fab
                      icon="linkedin-in"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                  <a href="twitter.com">
                    <MDBIcon
                      fab
                      icon="twitter"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                  <a href="facebook.com">
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="grey-text"
                      size="lg"
                    />
                  </a>
                </MDBCol>
              </MDBCol>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
