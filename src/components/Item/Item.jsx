import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import '../../getFech/getItem'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Item = ({prod}) => {
    const {id, foto, categoria, name, price, stock, description} = prod;
    const [cantidad, setCantidad] = useState (1);
    const {agregarCart, isInCart} = useContext(CartContext)

    // const onAdd = (cantidad) => {
    //     if (cantidad > 1){
    //         console.log(`Seleccionaste ${cantidad} productos`);
    //     } else {
    //         console.log(`Seleccionaste ${cantidad} productos`)
    //     }
    // }

    const AgregarCarrito = () => {   
        const itemAdd={id, foto, categoria, name, price, stock, description, cantidad}
        agregarCart(itemAdd);
        console.log(itemAdd);
    }

    return (
        <div>
            <img src={prod.foto} alt=""></img>
            <h2>{prod.name}</h2>           
            <Link to={`/detail/${prod.id}`}><Button className='btn-primary m-2' size="sm" variant='dark' active>
                Ver más
            </Button>            
            </Link>

            <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={prod.stock} variant='dark' onAdd={AgregarCarrito} />
        </div>
    )
}

export default Item