import react from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../assets/ram.jpg';
import './About.css';
import Card from 'react-bootstrap/Card';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function ContainerExample() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={4} xs={'12'} className='mt-5 pt-5' >
          <div id='about' className='kom'>
            <Card style={{ width: '18rem', }} className='img2' >
                <Card.Img src={img}  data-aos="flip-up"/>
              <Card.Body className='bg-light'>
                <Card.Title>RAMESH</Card.Title>
                <Card.Text data-aos="fade-up" >
                 When I’m not coding, I love exploring design trends, and improving my development workflow.
                </Card.Text>
              </Card.Body>
            </Card></div>
        </Col>
        <Col lg={8} xs={'12'} className='aboutme mt-5 fs-3 height-500px'>
          <h1 data-aos="fade-down">About Me</h1>
          <p style={{color:"#c7a87b"}} className='fs-5 pt-5'data-aos="fade-up" >I’m Ramesh, a passionate Web Developer with a strong focus on building modern, responsive, and user-friendly websites. I specialize in turning creative ideas into clean, efficient, and scalable web experiences.I work with technologies like HTML, CSS,Bootstrap, JavaScript, React,MongoDB,Node.js, and  and I enjoy learning new frameworks and tools to stay ahead in the fast-evolving world of web development. My goal is to craft websites that not only look great but also perform seamlessly across devices. When I’m not coding, I love exploring design trends, experimenting with UI effects, and improving my development workflow. <br /> <br /><CiCircleChevLeft className='fs-1'/><CiCircleChevRight className='fs-1' />
</p>
        </Col>
      </Row>
    </Container>
    
    
  );
}

export default ContainerExample;