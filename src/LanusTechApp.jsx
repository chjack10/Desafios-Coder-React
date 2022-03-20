import AppRouter from './routers/AppRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

const LanusTechApp = () => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });

  return (
    <div className='App'>
      <ThemeProvider theme={darkTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
};

export default LanusTechApp;
