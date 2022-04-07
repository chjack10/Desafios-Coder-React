import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm() {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Datos de tarjeta
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardName'
            label='Nombre en la tarjeta'
            helperText='Escribir tal cual aparece en la tarjeta'
            fullWidth
            autoComplete='cc-name'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardNumber'
            label='Número de tarjeta'
            fullWidth
            autoComplete='cc-number'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='expDate'
            label='Fecha de vencimiento'
            fullWidth
            autoComplete='cc-exp'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cvv'
            label='CVV'
            helperText='Últimos tres dígitos sobre la tira de firma'
            fullWidth
            autoComplete='cc-csc'
            variant='standard'
          />
        </Grid>
      </Grid>
    </>
  );
}
