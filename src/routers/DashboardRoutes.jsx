import Navbar from '../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../components/Home/HomeScreen';

import Container from '@mui/material/Container';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='home' element={<HomeScreen />} />

          {/* blank space for future routes */}

          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Container>
    </>
  );
};

export default DashboardRoutes;
