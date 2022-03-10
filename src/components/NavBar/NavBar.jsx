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
import CartWidget from '../CartWidget'

export class NavBar extends Component {
render () {
return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TuMate|Arg®</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Acerca de Nosotros</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Termeras</a></li>
            <li><a class="dropdown-item" href="#">Mates y Bombillas</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Yerberos y Azucareros</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"></a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
)
}
}

export default NavBar