import { useState } from 'react';

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  //   const reset = () => setCounter(initialState);

  return {
    counter,
    increment,
    decrement,
  };
};

/*

A tener en cuenta:
- El número contador nunca puede superar el stock disponible (if counter < 1 return)
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd (if counter > stock return)
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
