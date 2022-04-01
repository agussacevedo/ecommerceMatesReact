import { useState, useEffect } from 'react'

function ItemListContainer ({greeting}) {
    const [producto] = useState([]);
    
    useEffect( () => {
        let url = 'ItemDetail.json'
        fetch(url)
        .then(resp => console.log(resp))
    },
    )
}
    

export default ItemDetailContainer