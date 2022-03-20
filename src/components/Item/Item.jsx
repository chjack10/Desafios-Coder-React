import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = () => {
  return (
    <Card
      sx={{ maxWidth: 345, maxHeight: 380, width: 280 }}
      className='animate__animated animate__fadeIn'>
      <CardActionArea>
        <CardMedia
          component='img'
          height='220'
          image='../../src/assets/img/desktops-1.jpg'
          alt='desktops-1'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            PC Gamer Intel Core i3 10100F H510M-E 8GB SSD 240GB GT730 2GB 500W
            80+ AUREOX PICTOR
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size='small' color='error'>
          Ver más
        </Button>
        <Typography variant='subtitle2' color='text.secondary' align='right'>
          $999.999
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item;
