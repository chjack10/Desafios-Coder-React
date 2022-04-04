import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../components/NavBar/NavBar';
import ItemListCointainer from '../components/Item/ItemListCointainer';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import Cart from '../components/Cart/Cart';

import Container from '@mui/material/Container';

const DashboardRoutes = () => (
  <>
    <Navbar />
    <Container>
      <Routes>
        <Route path='/' element={<ItemListCointainer />} />
        <Route path='/category/:categoryId' element={<ItemListCointainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  </>
);

export default DashboardRoutes;
