import React from 'react';
import './NavBar.css'

const NavBar = () => {
 return(
        <header>
            <ul>
            <li><a href="../public/index.html"><h3>Termeras</h3></a></li>
            <li><a href="../public/index.html"><h3>Mates</h3></a></li>
            <li><a href="../public/index.html"><h3>Bombillas</h3></a></li>
            <li><a href="../public/index.html"><h3>Otros</h3></a></li>
            </ul>
        </header>
    )
}

export { NavBar }