import data from '../data/data';

const getItemById = (id = '') => {
  return data.find((item) => item.id === id);
};

export default getItemById;
