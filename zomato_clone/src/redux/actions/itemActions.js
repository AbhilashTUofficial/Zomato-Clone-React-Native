export const addItem = (iName, cat) => {
  return {
    type: 'add_item',
    itemName: iName,
    category: cat,
  };
};

export const removeItem = (iName, cat) => {
  return {
    type: 'remove_item',
    itemName: iName,
    category: cat,
  };
};

export const favItem = (iName, cat) => {
  return {
    type: 'fav_item',
    itemName: iName,
    category: cat,
  };
};
