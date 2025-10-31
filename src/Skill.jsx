import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function Skill() {
  return (
<Container id='skill' className='pen mt-5'style={{color:"#c7a87b"}}>     
      <Row>
          <p className='mt-5 text-light text-center fs-1'data-aos="fade-down">SKILLS</p>
        <Col lg={6}>
          <div className='bar p-5'data-aos="fade-up" style={{color:"#c7a87b"}}> 
            <p className='fs-4 ' >Html</p>
            <ProgressBar style={{height:'20px'}} variant="secondary" now={95} />
            <p className='fs-4 '>Css</p>
            <ProgressBar  style={{height:'20px'}} variant="secondary" now={90} />
            <p className='fs-4 '>JavaScript</p>
            <ProgressBar  style={{height:'20px'}} variant="secondary" now={85} /> 
            <p className='fs-4 ' >React js</p> 
            <ProgressBar  style={{height:'20px'}} variant="secondary" now={80} /> 
          </div>
        </Col>
        <Col lg={6}>
         <div className='bar1 pe-5'data-aos="fade-up" style={{color:"#c7a87b"}}>
            <p className='fs-4 ' >MongoDB</p>
           <ProgressBar  style={{height:'20px'}} variant="secondary" now={40} />
           <p className='fs-4 ' >Express.js</p>
            <ProgressBar  style={{height:'20px'}} variant="secondary" now={20} />
            <p className='fs-4 '>Node.js</p>
            <ProgressBar  style={{height:'20px'}} variant="secondary" now={60} />
            <p className='fs-4 ' >Git</p>
            <ProgressBar  style={{height:'20px'}} variant="secondary" now={60} />
         </div>
        
         
        </Col>
      </Row>
      <div className='text-center'data-aos="zoom-in-up">
      <CiCircleChevLeft className='fs-1 mb-5'/>   <CiCircleChevRight className='fs-1 mb-5' />
        </div>
    </Container>

  )
}

export default Skill