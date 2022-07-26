import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import gradienttriangle from '../../assets/CCLogo.png'

export default function MyNavbar() {
  return (

    <Navbar fixed="top" className='custom-nav d-flex'>
      <Container className='py-0'>
        <Navbar.Brand style={{ "color": "white" }} className='d-sm-flex brand  ' href="#home">CC.</Navbar.Brand>
        <div className=' align-items-center '>
          <span className='d-lg-none d-flex justify-content-between'>
            <a target="_blank" rel="noreferrer" href='https://github.com/SilverBits1001'>
              <FaGithub className='ms-2' size={25} />
            </a>
            <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/corey-coleman-881983218'>
              <FaLinkedin className='ms-2' size={25} />
            </a>
            <a  href="mailto: coreycoleman1001@gmail.com">
              <FaEnvelope className='ms-2' size={25} />
            </a>
          </span>
          {/*           <img className='nav-pic d-sm-none d-flex ' src={gradienttriangle} alt='gradient triangle' />
 */}

          <Nav.Link className='contact-link px-1 d-none d-lg-flex' href="mailto: coreycoleman1001@gmail.com">say hi.</Nav.Link>
        </div>
      </Container>
      {/*       <Container className='d-lg-none '>
        <NavDropdown className='ms-auto' title="socials" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">linkedin</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">github</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">resume</NavDropdown.Item>
        </NavDropdown>
      </Container>
 */}

    </Navbar>



  )
}






<Navbar class='custom-nav' bg="transparent" expand="lg">
  <Container>
    <Navbar.Brand href="#home">CC.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="ms-auto">
      <Nav.Link href="#projects">projects</Nav.Link>
      <Nav.Link href="#home">about</Nav.Link>
      <Nav.Link href="#home">contact</Nav.Link>

    </Nav>
  </Container>
</Navbar>