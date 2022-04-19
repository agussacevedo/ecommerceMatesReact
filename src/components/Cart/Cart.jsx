import React from "react"
import EmptyCart from "../EmptyCart/EmptyCart"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "bootstrap"

const Cart =()=>{
    const {cartList, precioTotal, vaciarCart, removeItem}=useContext(CartContext)

  /* Si el carrito esta vacio se llama al componente de EmptyCart */
  if(cartList.length === 0){
    return <EmptyCart />
  }

  return (
    <>
      <div>
        {
          cartList.map((prod) => (
            <>
              <div key={prod.id} className="d-flex align-items-center flex-column">
                  <h3>{prod.name}</h3>
                  <p>Precio: {prod.price * prod.cantidad}</p>
                  <p>Cantidad: <strong>{prod.cantidad}</strong></p>
                  <button onClick={()=> removeItem(prod.id)}>🗑️</button>
              </div>
              <hr/>
            </>
          ))
          }
          <div className="d-flex align-items-center flex-column">
            <h3>PRECIO FINAL:$ {precioTotal()}</h3>
            <button className="btn btn-danger" onClick={vaciarCart}>VACIAR CARRO</button>
            <br></br>
            <Link to='/checkout'><button className="btn btn-success">FINALIZAR COMPRA</button></Link>
          </div>
      </div>
    </>
  )
}


export default Cart