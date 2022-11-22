import {configureStore} from '@reduxjs/toolkit';

import restaurantReducer from './Restaurant/restaurantSlice';

export const store = configureStore({
  reducer: {
    data: restaurantReducer,
  },
});
