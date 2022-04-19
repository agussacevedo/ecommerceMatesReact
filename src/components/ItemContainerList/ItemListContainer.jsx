import { useState, useEffect } from 'react'
import {data, getItem, productos} from '../../getFech/getItem'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../Firebase/Firebase"

function ItemListContainer ({greeting}) {
    const [Productos, setProductos] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState (false);

    useEffect (() => {
        setLoading(true)
        const productosRef=collection(db, "Productos");
        const q= id ? query(productosRef, where('categoria', '==', id)) : productosRef
        getDocs(q)
            .then((res) => {
                const itemdDb=res.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                console.log(itemdDb)
                setProductos(itemdDb);
            })
            .finally(()=>{setLoading(false);});
    }, [id])

    return(
        <>
            <div className=''>
            {loading ? <strong className="d-flex justify-content-center">Renderizando productos...</strong> : ''}
                <h1 className=''>
                    {greeting}
                </h1>
                <ItemList Productos = {Productos} />
            </div>
        </>
    )
    
}
export default ItemListContainer