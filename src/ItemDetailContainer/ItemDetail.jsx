import ItemCount from "../components/ItemCount/ItemCount";
import '../components/Item/Item.css';
import {Link} from "react-router-dom";
import { Button } from "bootstrap";

function ItemDetail ({product}) {



    const AgregarCarrito = () => {
        //onAdd(count);
        console.log("Hola Mundo")
    }

    return (
        <div className="ESTILO" key={product.id}>
            <div className="ESTILO">
                <img className="ESTILO" src={product.url} alt={product.title} />
                <div className="ESTILO">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            {Button === 'addButton' ?
            <ItemCount initial={1} stock={product.sotck} onAdd={AgregarCarrito}/>
            :
            <div>
                <Link to='./Cart'>
                    <button>Terminar mi compra</button>
                </Link>
            </div>}
        </div>        
                 
    )
}

export default ItemDetail