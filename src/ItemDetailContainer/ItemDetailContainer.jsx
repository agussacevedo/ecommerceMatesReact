import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import '../../src/components/Item/Item.css'
import { data, getItem } from '../getFech/getItem';

function ItemDetailContainer () {
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {id} = useParams();

    useEffect (() => {
        getItem
        .then((respuesta) => {
            setProduct(respuesta.find((prod) => prod.id ===Number(id)))
        }
        )
        getItem.catch(error => console.log (error))
        getItem.finally(() => setLoading(false))
    }, [id])

    return (
        <div className='ESTILOS'>
            {loading ? <div className='ESTILOS'>
                <img className='ESTILOS' src= 'IMAGEN' alt=''></img></div> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer