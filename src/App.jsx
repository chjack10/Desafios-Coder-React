import './App.css';
import ItemListCointainer from './components/NavBar/ItemListCointainer';
import NavBar from './components/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ThemeProvider theme={darkTheme}>
        <ItemListCointainer greeting='Here goes your greeting' />
      </ThemeProvider>
    </div>
  );
}

export default App;
