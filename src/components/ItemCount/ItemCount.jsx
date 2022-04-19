import './ItemCount.css'
import {Card, Button} from 'react-bootstrap'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function ItemCount ({cantidad, setCantidad, stock, onAdd}) {

    const sumar = () => {
        if (cantidad>=stock) {
            alert ('No hay más stock')
        } else {
            setCantidad(cantidad + 1);
        }
    }

    const restar = () => {
        if (cantidad === 1 ){
            alert ('No se puede seguir disminuyendo')
        } else {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <Card className=''>
                <Card.Body>

                    <Card.Body className=''>
                        <Button className='btn-primary' variant='secondary' onClick={restar}>-</Button>
                        <label>{cantidad}</label>
                        <Button className='btn-primary' variant='secondary' onClick={sumar}>+</Button>
                        <br></br>
                        <br></br>
                        <Button className='btn-primary' variant='secondary' onClick={onAdd}>
                            Agregar al carrito
                        </Button>
                    </Card.Body>

                </Card.Body>
            </Card>
        </>
    )

}