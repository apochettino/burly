import React from 'react';
import './navbar.css'
import * as ReactBootStrap from 'react-bootstrap';
import { CartWid } from './../CartWidget/cartWidget'


export const NavBar = () => {

    return (

        <ReactBootStrap.Navbar className="prueba" bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#home">Burly</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Shop</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Explore</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">New In!</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Contact Us</ReactBootStrap.Nav.Link>
            
          </ReactBootStrap.Nav>
          <CartWid/>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

    )


}