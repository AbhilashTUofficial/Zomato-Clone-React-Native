export const addToCart = (shopId, itemName) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: shopId,
      itemName: itemName,
    },
  };
};
