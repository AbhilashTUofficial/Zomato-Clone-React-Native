import {createSlice} from '@reduxjs/toolkit';
import {initialData} from '../../model/ResturantsList';
import {updateData} from '../../util/http';

const getData = () => {
  // updateData(state);
  console.log('getdata called');
  return initialData;
};

const restaurantSlice = createSlice({
  name: 'restaurantReducer',
  initialState: initialData,
  // {
  //   Restaurants: null,
  //   currentRest: {
  //     id: 0,
  //   },
  //   cart: {
  //     metaData: {
  //       storeName: null,
  //       itemCount: null,
  //       totalPrice: null,
  //     },
  //     items: null,
  //   },
  // },
  reducers: {
    likeRestaurant: (state, action) => {
      var currentState = state.Restaurants.find(
        restaurant => restaurant.id === action.payload,
      );
      currentState.faved = !currentState.faved;
    },
    likeItem: (state, action) => {
      // Locate the current item
      var currentRest = state.Restaurants.find(
        restaurant => restaurant.id === action.payload.restId,
      );
      var currentCategroy = currentRest.categories.find(
        category => category.title === action.payload.category,
      );
      var currentItem = currentCategroy.items.find(
        item => item.itemId === action.payload.itemId,
      );
      // Update the value
      currentItem.faved = !currentItem.faved;
    },

    currentRestaurant: (state, action) => {
      var currentRest = state.currentRest;
      currentRest.id = action.payload;
    },
    addItem: (state, action) => {
      // Locate the current item
      var currentRest = state.Restaurants.find(
        restaurant => restaurant.id === action.payload.restId,
      );
      var currentCategroy = currentRest.categories.find(
        category => category.title === action.payload.category,
      );
      var currentItem = currentCategroy.items.find(
        item => item.itemId === action.payload.itemId,
      );
      // Update the value
      currentItem.onCart = currentItem.onCart + 1;
      // Update cart items
      // var cart = state.cart;
      // var items = cart.items;
      // if (cart.items === null) {
      //   console.log('called');
      //   items.push(currentItem);
      // } else {
      //   cart.items.map(item => {
      //     if (item.itemId === currentItem.itemId) {
      //       item.onCart = currentItem.onCart;
      //     } else {
      //       cart.items.push({currentItem});
      //     }
      //   });
      // }
      // Update cart metadata
      // console.log(cart);
    },
    removeItem: (state, action) => {
      // Locate the current item
      var currentRest = state.Restaurants.find(
        restaurant => restaurant.id === action.payload.restId,
      );
      var currentCategroy = currentRest.categories.find(
        category => category.title === action.payload.category,
      );
      var currentItem = currentCategroy.items.find(
        item => item.itemId === action.payload.itemId,
      );

      // Update the value
      currentItem.onCart = currentItem.onCart - 1;
      // Update cart items
      // state.cart.items.pop(currentItem);
    },
    addToBuy: (state, action) => {
      //restId, category, itemId
      // chart: restName, totalCost,itemCounts, restId, travelTime,
    },
  },
});

export const {
  likeRestaurant,
  currentRestaurant,
  likeItem,
  addItem,
  removeItem,
  fetchData,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
