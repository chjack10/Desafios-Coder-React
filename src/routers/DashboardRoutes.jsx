import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../components/NavBar/NavBar';
import ItemListCointainer from '../components/Item/ItemListCointainer';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import Cart from '../components/Cart/Cart';

import Container from '@mui/material/Container';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<ItemListCointainer />} />
          <Route
            path='/category/:categoryId'
            element={<ItemListCointainer />}
          />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Container>
    </>
  );
};

export default DashboardRoutes;

/*

  // Reemplazado para cumplir con la entrega

  // import DesktopsScreen from '../views/DesktopsScreen';
  // import NotebooksScreen from '../views/NotebooksScreen';
  // import GadgetsScreen from '../views/GadgetsScreen';
  // import ContactoScreen from '../views/ContactoScreen';
  //import HomeScreen from '../views/HomeScreen';
  //import ItemDetailScreen from '../views/ItemDetailScreen';
  //import ContactoScreen from '../views/ContactoScreen';

  <Route path='/' element={<HomeScreen />} />
  <Route path='home' element={<HomeScreen />} />
  <Route path='desktops' element={<DesktopsScreen />} />
  <Route path='notebooks' element={<NotebooksScreen />} />
  <Route path='gadgets' element={<GadgetsScreen />} />
  <Route path='contacto' element={<ContactoScreen />} /> 
  
  */
