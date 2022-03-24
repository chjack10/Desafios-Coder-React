import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getItemById from '../../helpers/getItemById';
import LoadingSpinner from '../ui/LoadingSpinner';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { itemId } = useParams();

  useEffect(async () => {
    setItem(await fetchItem);
  }, [item]);

  const fetchItem = new Promise((res) => {
    setTimeout(() => {
      res(getItemById(itemId));
    }, 2000);
  });

  return item ? <ItemDetail {...item} /> : <LoadingSpinner />;
};

export default ItemDetailContainer;
