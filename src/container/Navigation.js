import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavLink } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" 
            data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
<Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Signup</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/login">Login</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/logout">Logout</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/products">Products</NavLink>
                    <NavLink  eventKey="5" as={Link} to="/registration">Registration</NavLink>
                </Nav>
            </Navbar.Collapse>    
        </Navbar>
  )
}