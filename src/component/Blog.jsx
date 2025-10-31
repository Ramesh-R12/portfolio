import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../assets/blog2.jpg';
import pic from '../assets/lambo1.jpg';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function Blog() {
  return (
    <Container id='blog' className='mt-5'>
      <Row className='mt-5 p-5'>
        <h1 className='text-center'data-aos="fade-down">My Blog</h1>
        <Col lg={6} >
         <div className='row border  mt-5 '>
           <img data-aos="flip-right" src={pic}  style={{height:'300px',width:'300px'}} alt="" />
             <p className=' col-lg-4 col-sm-12'data-aos="fade-up" style={{color:'grey'}}>
                <h4 style={{color:"#c7a87b"}}>Lamborghini Website Clone</h4>
               Lamborghini Website project recreates the luxury and performance aesthetic of Lamborghini website.
               Tech Stack: React,MUI, React Router,CSS transitions,Html.</p>
         </div>
        </Col>
        <Col lg={6} >
           <div className='border row  mt-5 '>
           <img src={img} data-aos="flip-left"style={{height:'300px',width:'300px'}} alt=""/>
           <span className=' col-lg-4 col-sm-12 'data-aos="fade-up" style={{color:'grey'}}>
            <h4 style={{color:"#c7a87b"}}>Business Website</h4> 
            business designed to showcase the company’s products and services with a clean and professional aesthetic.
            Tech Stack: Html,CSS,Aos animation.</span>
           </div>
        </Col>
        <div className='text-center mt-5'data-aos="zoom-in-up">
              <CiCircleChevLeft className='fs-1 mb-5' style={{color:"#c7a87b"}}/>   <CiCircleChevRight className='fs-1 mb-5' style={{color:"#c7a87b"}}  />
                </div>
      </Row>
    </Container>
  )
}

export default Blog