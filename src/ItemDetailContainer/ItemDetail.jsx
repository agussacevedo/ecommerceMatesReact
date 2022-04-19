import ItemCount from "../components/ItemCount/ItemCount";
import '../components/Item/Item.css';
import {Link, useNavigate} from "react-router-dom";
//import { Button } from "bootstrap";
import { Card, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../components/Context/CartContext";


function ItemDetail ({product}) {
    const {id, foto, categoria, name, price, stock, description} = product;

    const {agregarCart, isInCart} = useContext(CartContext)

    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(-1);
    }

    const [cantidad, setCantidad] = useState (1);

    const FinalizarCompra = () => {
        console.log(`Finalización`)
    }

    const AgregarCarrito = () => {   
        const itemAdd={id, foto, categoria, name, price, stock, description, cantidad}
        agregarCart(itemAdd);
        console.log(itemAdd);
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
            <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={product.stock} onAdd={AgregarCarrito}/>
            
                <Link to='../Cart'>
                    <Button onClick={FinalizarCompra} className='btn-primary m-2' size="lg" variant='dark' active>Terminar mi compra</Button>
                </Link>
            <Button onClick={handleNavigate} className="btn-primary m-2" size="lg" variant='dark' active>
                Volver
            </Button>
            </Card.Body>
        </div>        
                 
    )
}

export default ItemDetail