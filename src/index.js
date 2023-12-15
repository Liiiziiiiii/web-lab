import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { getTotals } from "./features/cartSlice";

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    // [productsApi.reducerPath]: productsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});

// store.dispatch(productsFetch());
// store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

