import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemContainerList/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Productos"/>
    </div>
  );
}

export default App;
