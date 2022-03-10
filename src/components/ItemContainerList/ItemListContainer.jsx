// import React, { Component } from 'react' 

// const ComponenteClase = () => {
    //  return(
        // <div>ComponenteClase</div>
        // )
        // }
        
        // export { ComponenteClase }
        
        
// export class ItemListContainer extends Component {
// render () {

import React from 'react';
import './ItemListContainer.css'
import ItemCount from './ItemCount';


// function ItemListContainer  ( {greeting} ) {

    // const [count, setCount] = useState(0) 
    // let fecha = Date()

    // const handleCount = () => {
    //     setCount(count+1)
    // }

const ItemListContainer = () => {    
    return (
        <div>
            <ItemCount></ItemCount>
        </div>
    )
}
        
        
export default ItemListContainer