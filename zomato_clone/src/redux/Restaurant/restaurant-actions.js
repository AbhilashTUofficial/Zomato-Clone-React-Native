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
  return {
    type: 'LIKE_ITEM',
    payload: {
      id: id,
      itemName: itemName,
      category: category,
    },
  };
};

export const loadCurrentRest = restaurant => {
  return {
    type: 'LOAD_CURRENT_REST',
    payload: {
      restaurant: restaurant,
    },
  };
};

export const loadToRests = restaurant => {
  return {
    type: 'LOAD_TO_RESTAURANTS',
    payload: {
      restaurant: restaurant,
    },
  };
};
