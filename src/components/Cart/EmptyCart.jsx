import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EmptyCart = () => {
  const navigate = useNavigate();
  const handleReturn = () => navigate(-1);

  return (
    <>
      <Typography variant='h5' align='center' sx={{ my: 5 }}>
        No hay productos en el carrito
      </Typography>
      <Button startIcon={<ArrowBackIcon />} onClick={handleReturn}>
        Volver
      </Button>
    </>
  );
};

export default EmptyCart;
