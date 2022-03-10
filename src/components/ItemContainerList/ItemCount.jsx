import React, {useState} from 'react';
import ItemImage from './ItemImage';


function ItemCount  ( {greeting} ) {
const [count, setCount] = useState(0)


const Sumar = () => {
    setCount(count+1)
}

const Restar =() => {
    setCount(count-1)
}

//const itemCount = () => {

return(
    <div className='Item'>
    <ItemImage className='Mate'></ItemImage>
    <section>
        <button onClick={Restar}>-</button>
        <h2>{count}</h2>
        <button onClick ={Sumar}>+</button>
    </section>
    </div>
    )
}
//}

export default ItemCount 