import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import About from './About';
import './Home.css';
import pic from'../assets/ram2.jpg';
function Home() {
  return (
<div id="home" > 
  <div className="  img  text-white py-5">
      <Container id='home'>
      <Row className=" align-items-center  " >
        <Col md={6}
        >
        <img src={pic} alt='' className='pic w-100' data-aos="fade-up"/>
          </Col>
        <Col md={6} className='text-center pe-5 align-center mb-5' data-aos="fade-up">
            <p style={{color:"#c7a87b"}} className=" fs-2 ps-3">Hello! I'm</p>
            <h1 className=" fw-bold ms-3" style={{fontSize:'75px'}}>Ramesh</h1>
            <p style={{color:"#c7a87b"}} className=" fs-3 ps-4">Mern Stack Developer</p>
            <p className='text-secondary ps-4 text-center'>One Man. One Mission. Can He Go Beyond?One Man. One Mission. Can He Go Beyond?</p>
        </Col>
      </Row>
    </Container>
    </div>
 </div>
  );
}

export default Home;