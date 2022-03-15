import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';

const ItemCounter = ({ stock, initial }) => {
  const { counter, increment, decrement } = useCounter(initial);

  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems='center'>
      <FormControl
        sx={{
          m: 1,
          width: '11ch',
        }}
        variant='outlined'>
        <OutlinedInput
          id='outlined-adornment-weight'
          endAdornment={<InputAdornment position='end'>Un</InputAdornment>}
          aria-describedby='outlined-weight-helper-text'
          type='number'
          inputProps={{
            'aria-label': 'weight',
            type: 'number',
            value: counter,
            max: 10,
            min: 1,
            disabled: 'disabled',
          }}
        />
        <FormHelperText id='outlined-weight-helper-text'>
          En stock: {stock}
        </FormHelperText>
      </FormControl>
      <Stack direction={{ xs: 'row', sm: 'column' }}>
        <IconButton
          aria-label='addButton'
          disabled={counter === stock ? true : false}
          onClick={increment}>
          <AddIcon />
        </IconButton>
        <IconButton
          aria-label='removeButtom'
          disabled={counter === 1 ? true : false}
          onClick={decrement}>
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ItemCounter;

/*

A tener en cuenta:
- El número contador nunca puede superar el stock disponible 
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd 
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario

- Detalle importante: Como sabes, todavía no tenemos nuestro detalle de ítem y este desarrollo es parte de él, así que por el momento puedes probar e importar este componente dentro del ItemListContainer, sólo a propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos en el detalle del ítem
Ejemplo inicial: 

function ItemCount({ stock, initial,  onAdd }) {
 // Desarrollar lógica
}

- Adicionalmente tendremos un número inicial (initial) de cantidad de ítems, de tal modo que si lo invoco del siguiente modo:
<ItemCount stock=”5” initial=”1” /> 
debería ver el contador inicializado en 1 por defecto

*/
