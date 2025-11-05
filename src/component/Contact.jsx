import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import img from '../assets/i.jpg';
import { Form, Button } from "react-bootstrap";
import { FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";
function Contact() {
  return (
  <Container id='contact'> 

<Row className='fimg text-center p-5'>
  <Col xs={12} sm={12} md={4} lg={4}>
  <p className='text-center fs-3 text-light' data-aos="zoom-in-up">Follow me!!</p>
  </Col>
  <Col xs={12} sm={12} md={4} lg={4}>
  <div className=' fs-2 text-light mb-3'data-aos="zoom-in-up">
      <FaLinkedin /> 
             <FaSquareWhatsapp />  
             <FaInstagramSquare /> 
             <FaSquareFacebook />  
  </div> 
  </Col>
  <Col className='fs-3 text-light 'data-aos="zoom-in-up" xs={12} sm={12} md={4} lg={4}> Share it!</Col>
  
</Row>
<div>

      <Row className=' align-items-center pt-5'style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>
        <Col lg={3} className='d-flex p-5'>
             <div>
               <img src={img} alt=""data-aos="flip-left" style={{height:"170px",width:"auto"}}/> 
            <p className="mt-2" style={{color:"#c7a87b"}}>Read more about me</p>
             </div>
          </Col>  


          <Col lg={3} className='part'style={{padding:"50px"}}> 
             <div className='text-light ms-1' data-aos="fade-up"
     data-aos-duration="4000">
                 <h4 className="fw-bold ">Get In Touch</h4>
            <p>
              <strong>Phone:</strong> 9344332247
            </p>
            <p>
              <strong>Email:</strong> ramesh@gmail.com
            </p>
            <p>
             <strong> 6/89 A,konam,Nagercoil</strong>

            </p>
            <div className="d-flex gap-3 mt-3 ">
              <FaLinkedin className='fs-3' /> 
             <FaSquareWhatsapp className='fs-3' />  
                <FaSquareFacebook className='fs-3'/>   
              <FaInstagramSquare  className='fs-3'/>
            </div>
             </div>         
        </Col>


        <Col lg={6} md={4}style={{padding:"50px"}} data-aos="fade-up"
     data-aos-duration="4000">
            <h4 className="heading mb-3">Contact Form</h4>
            <Form >
              <Row>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                     placeholder="Name"
                     style={{
                      backgroundColor:'#212121ff',
                      color:"#fff",
                      fontWeight: "bold",
                      borderRadius:"1px"
                    }}
                    className="mb-3  border-secondary"
                  />
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    style={{
                      backgroundColor:'#212121ff',
                      color:"#fff",
                      fontWeight: "bold",
                      borderRadius:"1px"
                    }}
                    className="mb-3 border-secondary"
                  />
                </Col>
              </Row>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                style={{
                      backgroundColor:'#212121ff',
                      color:"#fff",
                      fontWeight: "bold",
                      borderRadius:"1px"
                    }}
                className="mb-3  border-secondary"
              />
              <Button
                variant="warning"
                type="submit"
                style={{
                  backgroundColor: "#d6a96a",
                  border: "none",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius:"1px"
                }}
              >
                SUBMIT
              </Button>
            </Form>

          </Col>
          <span className='footer text-center'data-aos="zoom-in-up">
        © 2025 ramzz | Design by freehtml5.co | All rights Reserved.
          </span>
        </Row>  
  
      </div>
      
    </Container>
       

        
  )
}

export default Contact