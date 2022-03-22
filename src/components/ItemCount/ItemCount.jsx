import './ItemCount.css'
import {Card, Button} from 'react-bootstrap'
import { useState } from 'react'

export default function ItemCount ({initial, stock, onAdd}) {

    const [count, setCount] = useState (initial);
    const sumar = () => {
        if (count>=stock) {
            alert ('No hay más stock')
        } else {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if (count === 1 ){
            alert ('No se puede seguir disminuyendo')
        } else {
            setCount(count - 1);
        }
    }

    const AgregarCarrito = () => {
        onAdd(count);
    }


    return (
        <>
            <Card className=''>
                <Card.Body>

                    <Card.Body className=''>
                        <Button onClick={restar}>-</Button>
                        <label>{count}</label>
                        <Button onClick={sumar}>+</Button>
                    </Card.Body>

                    <Card.Body>
                        <Button variant='primary' onClick={AgregarCarrito}>
                            Agregar al carrito
                        </Button>
                    </Card.Body>

                </Card.Body>
            </Card>
        </>
    )

}