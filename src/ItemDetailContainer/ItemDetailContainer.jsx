import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import '../../src/components/Item/Item.css'
import { data } from '../getFech/data';

function ItemDetailContainer () {
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {id} = useParams();

    useEffect (() => {
        data
        .then((response) => {
            setProduct(response.find(prod => prod.id ===id))
        }
        )
        .catch(error => console.log (error))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <div className='ESTILOS'>
            {loading ? <div className='ESTILOS'>
                <img className='ESTILOS' src= 'IMAGEN' alt=''></img></div> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer