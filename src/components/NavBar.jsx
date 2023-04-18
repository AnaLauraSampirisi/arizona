import React from 'react';
import CartWidget from './CartWidget';
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" className="barra">
    <Container>
      <Navbar.Brand as={NavLink} to='/'>
        <img
          alt=""
          src= {logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className='me-auto'>
        <Nav.Link as={NavLink}to="/categoria/Vestidos Largos">Vestidos Largos</Nav.Link>
        <Nav.Link as={NavLink}to="/categoria/Vestidos Cortos">Vestidos Cortos</Nav.Link>
        <Nav.Link as={NavLink}to="/categoria/Vestidos Informales">Vestidos Informales</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <div id='carro' className='carro'>
    <NavLink to='/cart' style={{textDecoration:'none'}}> <CartWidget/> </NavLink>
  </div>
</Navbar>
</>
  );
};

export default NavBar;