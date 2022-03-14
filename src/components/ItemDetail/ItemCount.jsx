import TextField from '@mui/material/TextField';
import React from 'react';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const ItemCounter = () => {
  return (
    <>
      {/* <Paper elevation={20}>
        <TextField
          id='Quantity'
          label='Number'
          type='number'
          defaultValue='1'
          inputProps={{ minLength: 1, maxLength: 4 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Paper> */}

      <FormControl
        sx={{
          m: 1,
          width: '11ch',
        }}
        variant='outlined'>
        <OutlinedInput
          id='outlined-adornment-weight'
          endAdornment={<InputAdornment position='end'>U</InputAdornment>}
          aria-describedby='outlined-weight-helper-text'
          type='numer'
          inputProps={{
            'aria-label': 'weight',
            type: 'number',
            value: 1,
            max: 10,
            min: 1,
            disabled: 'disabled',
          }}
        />
        <FormHelperText id='outlined-weight-helper-text'>
          En stock: 10
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default ItemCounter;

/*

A tener en cuenta:
- El número contador nunca puede superar el stock disponible (if Itemcounter < 1 return)
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd (if Itemcounter > stock return)
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
