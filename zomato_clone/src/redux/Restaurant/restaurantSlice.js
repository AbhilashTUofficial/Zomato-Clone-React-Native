import {createSlice} from '@reduxjs/toolkit';
import {initialData} from '../../model/ResturantsList';

const restaurantSlice = createSlice({
  name: 'restaurantReducer',
  initialState: initialData,
  reducers: {
    likeRestaurant: (state, action) => {
      var currentState = state.Restaurants.find(
        restaurant => restaurant.id === action.payload,
      );
      currentState.faved = !currentState.faved;
    },
    likeItem: (state, action) => {
      var currentRest = state.Restaurants.find(
        restaurant => restaurant.id === action.payload.id,
      );
      var currentCategroy = currentRest.find(
        category => category.title === action.payload.category,
      );
      var currentItem = currentCategroy.find(
        item => item.id === action.payload.itemId,
      );
      currentItem.faved = !currentItem.faved;
    },

    currentRestaurant: (state, action) => {
      var currentRest = state.currentRest;
      currentRest.id = action.payload;
    },

    removeAllItems: state => {
      return [];
    },
  },
});

export const {likeRestaurant, currentRestaurant, removeAllItems} =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
