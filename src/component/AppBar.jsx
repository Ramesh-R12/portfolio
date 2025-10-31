import react from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import img from'../assets/logo1.png';
function AppBar() {
  return (
    <>
    <div className='bg'>

    <Navbar expand="lg" className="bgColor " >
      <Container>
        <Navbar.Brand className='' href="#home">
          <img src={img} alt="" style={{height:'100px',width:"180px"}} data-aos="flip-left"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav"className=' justify-content-end'>
          <Nav data-aos="fade-down">
            <Nav.Link href="#home" className='fs-6 p-4 ' style={{color:"#c7a87b"}}>Home</Nav.Link>
            <Nav.Link href="#about"className='fs-6 p-4 'style={{color:"#c7a87b"}}>About</Nav.Link>
            <Nav.Link href="#blog"className='fs-6 p-4 'style={{color:"#c7a87b"}}>Blog</Nav.Link>
            <Nav.Link href="#contact"className='fs-6 p-4'style={{color:"#c7a87b"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Home/>

    </div>
    
    </>
  );

}

export default AppBar