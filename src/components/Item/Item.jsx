import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({ id, title, price }) => {
  const imgPath = `../../src/assets/img/${id}.jpg`;

  return (
    <Card className='animate__animated animate__fadeIn' raised>
      <CardActionArea>
        <CardMedia component='img' height='260' image={imgPath} alt={id} />
        <CardContent>
          <Typography variant='body2' color='text.secondary' noWrap>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size='small' color='error'>
          Ver más
        </Button>
        <Typography variant='subtitle2' color='text.secondary' align='right'>
          {`$${price}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item;
