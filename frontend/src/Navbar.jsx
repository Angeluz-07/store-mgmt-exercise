import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const NavbarWrap = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Navbar.Brand href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/addProduct">Agregar Productos</Nav.Link>
          <Nav.Link href="/addStock">Asignar Productos</Nav.Link>
          <Nav.Link href="/sales">Vender Productos</Nav.Link>
          <Nav.Link href="/stores">Locales</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
};

export default NavbarWrap;      