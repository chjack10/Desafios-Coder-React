import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getItemsByCategory from '../../helpers/getItemsByCategory';
import LoadingSpinner from '../ui/LoadingSpinner';
import ItemList from './ItemList';

const ItemListCointainer = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchData
      .then(setItems)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [categoryId]);

  const fetchData = new Promise((res) => {
    setTimeout(() => {
      res(getItemsByCategory(categoryId));
    }, 500);
  });

  return loading ? <LoadingSpinner /> : <ItemList items={items} />;
};
export default ItemListCointainer;
