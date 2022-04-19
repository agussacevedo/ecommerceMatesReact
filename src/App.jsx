import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainerList/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './components/Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
    <div className="App">
    < BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="TuMate"/>}></Route>
        <Route path='/categoria/:id' element={<ItemListContainer greeting="TuMate"/>}></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer greeting="TuMate"/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route> 
      </Routes>
    </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
