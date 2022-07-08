import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
export default function MyNavbar() {
  return (
    <Navbar bg="transparent" expand="lg">
    <Container>
      <Navbar.Brand href="#home">CC.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="#home">projects</Nav.Link>
        <Nav.Link href="#home">about</Nav.Link>
        <Nav.Link href="#home">contact</Nav.Link>
          <NavDropdown title="socials" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">linkedin</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">github</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
