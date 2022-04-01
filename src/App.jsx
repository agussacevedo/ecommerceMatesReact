import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainerList/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="TuMate"/>
      
    </div>
  );
}

export default App;
