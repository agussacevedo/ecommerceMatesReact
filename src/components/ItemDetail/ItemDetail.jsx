import Intercambiabilidad from "../../intercambiabilidad"


const ItemDetail = ({producto}) => {
  
  return (
    <div>
        {producto.name} 
        <Intercambiabilidad></Intercambiabilidad>
    </div>
  )
}

export default ItemDetail