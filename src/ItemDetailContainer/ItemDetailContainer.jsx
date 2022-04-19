import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import '../../src/components/Item/Item.css'
import { data, getItem } from '../getFech/getItem';
import {db} from '../components/Firebase/Firebase'
import {doc, getDoc} from "firebase/firestore"


function ItemDetailContainer () {
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState (false);
    const {id} = useParams();

    useEffect (() => {
        setLoading(true)
        const itemDocRef = doc(db, "Productos", id)
        getDoc(itemDocRef)
          .then((res) => {
            const prodDb={id: res.id, ...res.data()}
            setProduct(prodDb)
          })
        .finally(() => setLoading(false))
    }, [id])

    return (
        <div className='ESTILOS'>
            {loading ? <p>Renderizando productos...</p> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer