import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Datos de envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='Nombre'
            fullWidth
            autoComplete='given-name'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Apellido'
            fullWidth
            autoComplete='family-name'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type='email'
            id='email'
            name='email'
            label='E-mail'
            fullWidth
            autoComplete='e-mail'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Dirección 1'
            fullWidth
            autoComplete='shipping address-line1'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='Ciudad'
            fullWidth
            autoComplete='shipping address-level2'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='state'
            name='state'
            label='Estado/Provincia/Region'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type='number'
            id='zip'
            name='zip'
            label='Código postal'
            fullWidth
            autoComplete='shipping postal-code'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            label='Número de teléfono'
            fullWidth
            autoComplete='Phone number'
            variant='standard'
          />
        </Grid>
      </Grid>
    </>
  );
}
