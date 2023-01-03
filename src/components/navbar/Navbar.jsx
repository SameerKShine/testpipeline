import React from 'react'
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
const NavNavbar = () => {
  return (
    <div>
    
         <Navbar  className="fixed-top bgNav" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Welcome !!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><NavLink className="text-decoration-none text-dark " to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-decoration-none text-dark " to="/login">LogIn</NavLink></Nav.Link>
            <Nav.Link ><NavLink className="text-decoration-none text-dark " to="/SignUp">SignUp</NavLink></Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  )
}

export default NavNavbar