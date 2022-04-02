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
import Cart from '../Cart/Cart'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export class NavBar extends Component {
render () {
return (
  <Navbar className='mx-5' bg="light" expand="lg">
  
    <Navbar.Brand href="#home">Tu Mate|Arg®</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mates y Bombillas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Temeras</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Yerberos y Azucareros</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
  <Cart></Cart>
</Navbar>
)
}
}

export default NavBar