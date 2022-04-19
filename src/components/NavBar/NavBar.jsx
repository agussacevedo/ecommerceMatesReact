// import React from 'react';
// import './NavBar.css'

// const NavBar = () => {
//  return(
//         <header>
//             <ul>
//             <li><a href="../public/index.html"><h3>Termeras</h3></a></li>
//             <li><a href="../public/index.html"><h3>Mates</h3></a></li>
//             <li><a href="../public/index.html"><h3>Bombillas</h3></a></li>
//             <li><a href="../public/index.html"><h3>Otros</h3></a></li>
//             </ul>
//         </header>
//     )
// }

// export { NavBar }

import React, { Component } from 'react' 
import { Navbar, Container, Nav, NavDropdown,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget'

export class NavBar extends Component {
render () {
return (
  <Navbar className='mx-5' bg="light" expand="lg">
  
    <Nav.Link as={Link} to='/'>
    <Navbar.Brand >TuMate|Arg®</Navbar.Brand>
    </Nav.Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item><Nav.Link as={Link} to ='/categoria/matesYBombillas'> Mates y Bombillas</Nav.Link></NavDropdown.Item>
          <NavDropdown.Item><Nav.Link as={Link} to ='/categoria/termeras'> Termeras</Nav.Link></NavDropdown.Item>
          <NavDropdown.Item><Nav.Link as={Link} to ='/categoria/yerberosYAzucareros'> Yerberos y Azucareros</Nav.Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><Nav.Link as={Link} to ='/'> Todos</Nav.Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
   
    <CartWidget></CartWidget>

</Navbar>
)
}
}

export default NavBar