import ItemListCointainer from '../NavBar/ItemListCointainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const HomeScreen = () => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <ThemeProvider theme={darkTheme}>
      <ItemListCointainer />
    </ThemeProvider>
  );
};
export default HomeScreen;
