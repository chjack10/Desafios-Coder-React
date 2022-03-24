import { useNavigate } from 'react-router-dom';

import ItemDescription from './ItemDescription';
import ItemCount from './ItemCount';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const ItemDetail = ({ id, title, description, price, stock }) => {
  const navigate = useNavigate();
  const handleReturn = () => navigate(-1);
  const imgPath = `../../src/assets/img/${id}.jpg`;

  return (
    <>
      <Grid
        container
        mt={5}
        className='animate__animated animate__fadeIn'
        spacing={3}>
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'>
          <Card raised>
            <CardMedia component='img' image={imgPath} alt={id} />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'>
            <Button startIcon={<ArrowBackIcon />} onClick={handleReturn}>
              Volver
            </Button>
            <Typography component='h5' variant='h6' textAlign='center'>
              ${price}
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={6} md={8} animate__animated animate__fadeIn>
          <Typography component='h3' textAlign='center' gutterBottom>
            {title}
          </Typography>
          <Divider />

          <ItemDescription characteristics={description} />
          <Divider sx={{ mb: 2 }} />

          <Box display='flex' justifyContent={'center'}>
            <ItemCount stock={stock} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetail;
