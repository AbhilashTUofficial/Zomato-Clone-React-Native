export const addToCart = (shopId, itemName) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: shopId,
      itemName: itemName,
    },
  };
};

export const likeRestaurant = restId => {
  return {
    type: 'LIKE_RESTAURANT',
    payload: {
      id: restId,
    },
  };
};

export const likeItem = (id, itemName, category) => {
  console.log('action called');
  return {
    type: 'LIKE_ITEM',
    payload: {
      id: id,
      itemName: itemName,
      category: category,
    },
  };
};
