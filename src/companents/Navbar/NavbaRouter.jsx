import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  FiUsers} from "react-icons/fi";

const NavbaRouter = () => {
  return (
    < div>
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{color:"black" ,textDecoration:"none", marginTop:"8px" , paddingLeft:"10px"}} to="/home">
            <li style={{fontSize:"30px",paddingRight:"450px"}}><FiUsers/></li> 
            </Link>
            <Link style={{color:"black" ,textDecoration:"none", marginTop:"8px" , paddingLeft:"10px"}} to="/create"> 
            <li style={{fontSize:"30px",paddingRight:"450px"}} >Create</li>
            </Link>
            <Link style={{color:"black" ,textDecoration:"none", marginTop:"8px" , paddingLeft:"10px"}} to="/table"> 
            <li style={{fontSize:"30px",}}>Table</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavbaRouter