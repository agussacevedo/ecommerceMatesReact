import { useState, useEffect } from 'react'
import {data} from '../../getFech/data'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer';
//import ItemDetail from '../ItemDetail/ItemDetail';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer ({greeting}) {
    const [Productos, SetProductos] = useState([]);

    useEffect (() => {
        data
            .then((respuesta) => SetProductos(respuesta))
            .catch(err => console.log(err))
            .finally( ()=>console.log ("Cargando..."))
    }, [])

    return(
        <>
            <div className=''>
                <h1 className=''>
                    {greeting}
                </h1>
                <ItemList Productos = {Productos} />
            </div>
        </>
    )
    <ItemDetailContainer><ItemDetailContainer></ItemDetailContainer>
}

export default ItemListContainer