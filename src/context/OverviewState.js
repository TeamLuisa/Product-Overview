import React, { createContext, useReducer } from 'react';
import OverviewReducer from './OverviewReducer.js';
const axios = require('axios');

const initialOverviewState = {
  productInfo: {},
  productStyles: [],
  featuredStyle: {}
}

export const OverviewContext = createContext(initialOverviewState);

export const OverviewProvider = ({ children }) => {
  const [overviewState, overviewDispatch] = useReducer(OverviewReducer, initialOverviewState);

  //actions/functions
  function getProductInfo(id) {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((productInfoPayload) => {
        overviewDispatch({
          type: 'GET_PRODUCT_INFO',
          payload: productInfoPayload
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  function getProductStyles(id) {
    axios.get(`http://localhost:3000/products/${id}/styles`)
      .then((productStylesPayload) => {
        overviewDispatch({
          type: 'GET_PRODUCT_STYLES',
          payload: productStylesPayload
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return(<OverviewContext.Provider value={{
    productInfo: overviewState.productInfo,
    productStyles: overviewState.productStyles,
    getProductInfo,
    getProductStyles
  }}>
    {children}
  </OverviewContext.Provider>)
}