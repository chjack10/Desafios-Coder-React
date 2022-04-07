import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../ui/LoadingSpinner';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListCointainer = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(async () => {
    setLoading(true);

    const itemsRef = collection(db, 'items');
    const q = categoryId
      ? query(itemsRef, where('category', '==', categoryId))
      : itemsRef;

    try {
      const { docs } = await getDocs(q);
      const items = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setItems(items);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [categoryId]);

  return loading ? <LoadingSpinner /> : <ItemList items={items} />;
};
export default ItemListCointainer;
