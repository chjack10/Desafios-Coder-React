import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import getStepContent from '../../helpers/getStepContent';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import validateAddressForm from '../../helpers/validateAddressForm';
import validatePaymentForm from '../../helpers/validatePaymentForm';

const steps = ['Dirección de envío', 'Detalles del pago', 'Chequeo de datos'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { userData, errors, setErrors } = useContext(UserContext);
  console.log('errores:', errors);
  console.log('userData:', userData);

  const handleNext = () => {
    const formIsValid =
      activeStep === 0
        ? validateAddressForm(userData, setErrors)
        : validatePaymentForm(userData, setErrors);

    formIsValid && setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setErrors({});
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container
        component='main'
        maxWidth='sm'
        className='animate__animated animate__fadeIn'
      >
        <Paper
          sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={12}
        >
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant='h5' gutterBottom>
                  Muchas gracias por tu compra!
                </Typography>
                <Typography variant='subtitle1'>
                  Tu número de compra es #2001539. Enviamos un email a tu correo
                  con los detalles de tu compra y estaremos en contacto con vos
                  para seguir el estado de tu pedido.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Volver
                    </Button>
                  )}

                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? 'Terminar mi compra'
                      : 'Siguiente'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
