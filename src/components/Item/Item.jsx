import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import '../../getFech/data'

const Item = ({prod}) => {

    const onAdd = (cantidad) => {
        if (cantidad > 1){
            console.log(`Seleccionaste ${cantidad} productos`);
        } else {
            console.log(`Seleccionaste ${cantidad} productos`)
        }
    }

    return (
        <div>
            <img src={prod.foto} alt=""></img>
            <h2>{prod.nombre}</h2>
            <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
        </div>
    )
}

export default Item