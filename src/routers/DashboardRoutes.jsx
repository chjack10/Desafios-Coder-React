import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar';

import HomeScreen from '../views/HomeScreen';
import DesktopsScreen from '../views/DesktopsScreen';
import NotebooksScreen from '../views/NotebooksScreen';
import GadgetsScreen from '../views/GadgetsScreen';
import ContactoScreen from '../views/ContactoScreen';

import Container from '@mui/material/Container';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='home' element={<HomeScreen />} />
          <Route path='desktops' element={<DesktopsScreen />} />
          <Route path='notebooks' element={<NotebooksScreen />} />
          <Route path='gadgets' element={<GadgetsScreen />} />
          <Route path='contacto' element={<ContactoScreen />} />
          {/* <Route path='/detalles/$product' element={<ItemDetailScreen />} /> */}

          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Container>
    </>
  );
};

export default DashboardRoutes;
