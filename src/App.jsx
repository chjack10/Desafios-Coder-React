import './App.css';
import ItemListCointainer from './components/NavBar/ItemListCointainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListCointainer greeting='Here goes your greeting' />
    </div>
  );
}

export default App;
