import ItemCount from "../components/ItemCount/ItemCount";
import '../components/Item/Item.css';
import {Link} from "react-router-dom";
//import { Button } from "bootstrap";
import { Card, Button } from "react-bootstrap";


function ItemDetail ({product}) {

    const FinalizarCompra = () => {
        console.log(`Finalización`)
    }

    const AgregarCarrito = () => {
      //  onAdd(count);
        console.log(`Carrito`)
    }

    return (
        <div className="ESTILO" key={product.id}>
            <div className="ESTILO">
                <img className="ESTILO" src={product.foto} alt={product.name} />
                <div className="ESTILO">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            
            <Card.Body>
            <ItemCount initial={1} stock={product.stock} onAdd={AgregarCarrito}/>
            
                <Link to='../Cart.jsx'>
                    <Button onClick={FinalizarCompra} className='btn-primary m-2' size="lg" variant='dark' active>Terminar mi compra</Button>
                </Link>
            </Card.Body>
            
        </div>        
                 
    )
}

export default ItemDetail