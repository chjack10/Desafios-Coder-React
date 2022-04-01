import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartItem = ({ id, title, price, quantity }) => {
  const imgPath = '../../src/assets/img/id.jpg';

  return (
    <>
      <Grid container>
        <Grid item sm='3'>
          <img
            src='../../src/assets/img/desktops-1.jpg'
            alt='imagen'
            height='150'
            width='150'
          />
        </Grid>

        <Grid
          item
          sm='2'
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Typography variant='inherit'>
            {
              'PC Gamer Intel Core i3 10100F H510M-E 8GB SSD 240GB GT730 2GB 500W 80+ AUREOX PICTOR'
            }
          </Typography>
        </Grid>

        <Grid
          item
          sm='2'
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Box>
            <FormHelperText>Precio unitario</FormHelperText>
            <Typography variant='inherit'>{'$' + 10000.0}</Typography>
          </Box>
        </Grid>

        <Grid
          item
          sm='2'
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <FormHelperText>Cantidad </FormHelperText>
          <Typography variant='inherit'>{12}</Typography>
        </Grid>

        <Grid
          item
          sm='2'
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <FormHelperText>Subtotal </FormHelperText>
          <Typography variant='inherit'>{'$' + 13000.0}</Typography>
        </Grid>

        <Grid
          item
          sm='1'
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <RemoveCircleOutlineIcon />
        </Grid>
      </Grid>
    </>
  );
};
export default CartItem;
