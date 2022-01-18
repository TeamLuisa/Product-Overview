import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js';
import {  useParams, useLocation } from 'react-router-dom';

import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import { RatingsAndReviews } from './components/RatingsAndReviews/RatingsAndReviews.jsx'

import { Overview } from './components/Overview/Overview.jsx'
import { OverviewProvider } from './context/OverviewState.js';


import { RatingsAndReviewsProvider } from './context/RatingsAndReviewsState.js';

import { QA } from './components/QAs/QnA.jsx';



const ProductDetail = () => {
  let { id } = useParams();

  const { updateCurrentProductId, currentProductId, getAllProducts } = useContext(GlobalContext);

  useEffect(() =>{
    updateCurrentProductId(id);
  },[id])

  return (
    <div>
      <OverviewProvider>
        <Overview />
      </OverviewProvider>
      <RelatedProducts/>
      {/* <QA />
      <RatingsAndReviewsProvider>
        <RatingsAndReviews />
      </RatingsAndReviewsProvider> */}

    </div>
  );
}
export default ProductDetail;