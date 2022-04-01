import AppRouter from './routers/AppRouter';
import ThemeContext from '../src/context/ThemeContext';
import { CartProvider } from '../src/context/CartContext';

import './App.css';

const LanusTechApp = () => (
  <div className='App'>
    <CartProvider>
      <ThemeContext dark>
        <AppRouter />
      </ThemeContext>
    </CartProvider>
  </div>
);

export default LanusTechApp;
