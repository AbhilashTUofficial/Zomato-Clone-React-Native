import {Restaurants} from '../../model/ResturantsList';

const restaurantReducer = (state = Restaurants, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Get shop shops array
      const currentShop = state.shops.find(
        shop => shop.id === action.payload.id,
      );
      // Check if item is in cart already
      currentShop.items.map(item => {
        if (item.itemName === action.payload.itemName) {
          item.count += 1;
        }
      });

      const prvShops = state.cart;

      return {
        ...state,
        cart: {...prvShops, ...currentShop},
      };

    default:
      return state;
  }
};

export default restaurantReducer;
