// function CartWidget() {
//     return <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className="m-2" width="2%"/>   
// }

import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

import {useContext} from "react"
import {CartContext} from './Context/CartContext'

const CartWidget=()=>{

    const {cantidadTotalItem, cartList}=useContext(CartContext);

    return <>
            {
                cartList.length > 0 &&
                <>
                    <Link to="/cart">
                        <FaShoppingCart className="carrito"/>
                    </Link>
                    <span className="length">{cantidadTotalItem()}</span>
                </>
            }
            
    </>
}

export default CartWidget;

// import {Link} from "react-router-dom"
// import { FaShoppingCart } from "react-icons/fa";

// import {useContext} from "react"
// import {CartContext} from "./Context/CartContext"

// const CartWidget=()=>{

//     const {cartQuantity, cart}=useContext(CartContext);

//     return <>
//             {
//                 cart.length > 0 &&
//                 <>
//                     <Link to="/cart">
//                         <FaShoppingCart className="carrito"/>
//                     </Link>
//                     <span className="length">{cartQuantity()}</span>
//                 </>
//             }
            
//     </>
// }

// export default CartWidget;
