export const addToCart = (shopId, itemName) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: shopId,
      itemName: itemName,
    },
  };
};

export const LikeRestaurant = restId => {
  console.log('action called');
  return {
    type: 'LIKE_RESTAURANT',
    payload: {
      id: restId,
    },
  };
};
