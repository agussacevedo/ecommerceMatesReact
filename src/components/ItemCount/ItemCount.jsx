import './ItemCount.css'
import {Card, Button} from 'react-bootstrap'
import { useState } from 'react'

export default function ItemCount ({initial, stock, onAdd}) {

    console.log(stock)

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

    return (
        <>
            <Card className=''>
                <Card.Body>

                    <Card.Body className=''>
                        <Button className='btn-primary' onClick={restar}>-</Button>
                        <label>{count}</label>
                        <Button className='btn-primary' onClick={sumar}>+</Button>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn-primary' variant='primary' onClick={onAdd}>
                            Agregar al carrito
                        </Button>
                    </Card.Body>

                </Card.Body>
            </Card>
        </>
    )

}