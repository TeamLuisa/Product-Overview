import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

let priceAndStyleSelectorStyle = {
  display: 'flex',
  flexDirection: 'column'
}

let styleSelectorStyle = {
  display: 'flex',
  flexDirection: 'row'
}


export const PriceAndStyle = () => {
  const { currentProductId } = useContext(GlobalContext);
  const { getProductStyles, productStyles, getProductInfo, productInfo } = useContext(OverviewContext);
  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
    getProductInfo(id)
  }, [id])

  // const productStylesData = productStyles.data ? productStyles.data : ''
  // const productInfoData = productInfo.data ? productInfo.data : ''

  // console.log('productStylesData: ', productStylesData);
  // console.log('productInfoData: ', productInfoData);

  let currentStyleIndex = 3;

  const productPrice = productStyles.data ? productStyles.data.results[currentStyleIndex].original_price : ''
  const productStyleName = productStyles.data ? productStyles.data.results[currentStyleIndex].name : ''

  return (
    <div
      className="priceAndStyleSelector"
      style={priceAndStyleSelectorStyle}>
      <div
        className="price">
          {productPrice}
      </div>
      <div
        className="styleSelectorAndDropDown"
        style={styleSelectorStyle}>
        <div
          className="currentProductStyle">
          Style >
        </div>
        <div
          className="styleSelectorDropdown">
          {productStyleName}
        </div>
      </div>
    </div>
  );
}