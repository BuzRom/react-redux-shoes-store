import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import product from "./reducers/product";
import cart from "./reducers/cart";
import search from "./reducers/search";
import favourites from "./reducers/favourites";
import orders from "./reducers/orders";

const store = createStore(
  combineReducers({
    product,
    cart,
    search,
    favourites,
    orders,
  }),
  composeWithDevTools()
);

export default store;