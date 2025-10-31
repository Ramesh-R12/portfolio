import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
 
 import avatarImage from '../assets/ram.jpg';
import background from '../assets/about-me-bckg.jpg'
const PortfolioLayout = () => {
  return (
  <div  className='col-lg-3 col-sm-12'
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Container fluid className="p-0">
        <Row className="g-0 justify-content-center align-items-center position-relative">
           <Col
            xs={12}
            md={10}
            className="p-0 position-relative"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "80vh",
              borderRadius: "10px",
            }}
          >
             <div
              className="d-none d-md-block"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                width: "80%",
                fontSize: "1.2rem",
              }}
            >
              and it wa so ni
            </div>

             <div className="d-block d-md-none text-center text-white p-4">
              <p className="black-text m-0">
                ther was my portfolio in the garden and it wa so ni
              </p>
            </div>
          </Col>

           <Col
            xs={10}
            md={3}
            className="bg-white text-center p-4 shadow"
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              borderRadius: "8px",
              zIndex: 2,
            }}
          >
            <Image
              src={avatarImage}
              roundedCircle
              style={{ width: "100px", marginBottom: "15px" }}
            />
            <h5 className="fw-bold mb-2">my portfolio</h5>
            <p className="mb-0">Add a subheading</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioLayout;
