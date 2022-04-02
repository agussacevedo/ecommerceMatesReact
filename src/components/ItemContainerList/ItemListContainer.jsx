import { useState, useEffect } from 'react'
import {data, getItem, productos} from '../../getFech/getItem'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import {useParams} from 'react-router-dom'

function ItemListContainer ({greeting}) {
    const [Productos, SetProductos] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        getItem
            .then((respuesta)=> {
                if(id){
                    SetProductos(respuesta.filter((producto)=>producto.categoria === id));
                }else{
                    SetProductos(respuesta);
                }
            }) 
            .catch(err => console.log(err))
            .finally( ()=>console.log ("Cargando..."))
    }, [id])

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
    
}
export default ItemListContainer