import data from '../data/data.js';

const getItemsByCategory = (category = '') => {
  if (!category) return data;

  return data.filter((item) => item.category === category);
};

export default getItemsByCategory;
