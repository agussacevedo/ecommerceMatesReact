// import React, { Component } from 'react' 

// const ComponenteClase = () => {
    //  return(
        // <div>ComponenteClase</div>
        // )
        // }
        
        // export { ComponenteClase }
        
        
// export class ItemListContainer extends Component {
// render () {
import React, {useEffect, useState} from 'react';
import './ItemListContainer.css'

function ItemListContainer  ( {greeting} ) {
return (
<div>
    <center>
    <h2>{greeting}</h2>
    </center>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
)
}


export default ItemListContainer