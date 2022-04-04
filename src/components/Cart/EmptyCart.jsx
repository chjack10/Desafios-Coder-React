import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import GoBackBtn from '../ui/GoBackBtn';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant='h5' align='center' sx={{ my: 5 }}>
        No hay productos en el carrito
      </Typography>
      <GoBackBtn />
    </>
  );
};

export default EmptyCart;
