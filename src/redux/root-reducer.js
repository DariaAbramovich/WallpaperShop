import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import delatetReducer from './detale/detale.reduser';

export default combineReducers({
  cart: cartReducer,
  delate: delatetReducer
});

