import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainerList/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
    < BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="TuMate"/>}></Route>
        <Route path='/categoria/:id' element={<ItemListContainer greeting="TuMate"/>}></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer greeting="TuMate"/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
