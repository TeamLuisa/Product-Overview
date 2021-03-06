import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { SizeAndQuantity } from './SizeAndQuantity.jsx'
import { OverviewContext } from '../../../../context/OverviewState.js'

let addToCartStyle = {
  display: 'flex',
  flexDirection: 'column'
}

let sizeAndQuantityDropdownStyles = {
  display: 'flex',
  flexDirection: 'row'
}

let addToBagOrShareStyle = {
  display: 'flex',
  flexDirection: 'row'
}

let addToBagButtonStyle = {
  display: 'flex',
  flexGrow: 1
}

let shareButtonStyle = {
  display: 'flex',
  flexGrow: 1
}

export const AddToCart = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    productStyles,
    getProductStyles,
    resetProductValue,
    featuredStyleIndex,
    selectedItemSkuNumber,
  } = useContext(OverviewContext);
  let id = currentProductId;

  useEffect(() => {
    getProductStyles(currentProductId)
    return (() => {
      resetProductValue([])
    })
  }, [currentProductId])

  const skuObject = productStyles.data ? productStyles.data.results[featuredStyleIndex].skus : {}
  const skuNumberArray = productStyles.data && Object.keys(skuObject)

  const itemQuantities = skuObject[selectedItemSkuNumber] ? skuObject[selectedItemSkuNumber].quantity : 0
  const itemQuantitiesArray = skuObject[selectedItemSkuNumber] ? Array.from({length: itemQuantities}, (value, key) => key + 1) : []

  return (
    <div
      style={addToCartStyle}
      className="addToCart">
        <SizeAndQuantity
          skuArray={skuNumberArray}
          skuObject={skuObject}
          itemQuantities={itemQuantitiesArray}
          />
        <div
          className="addToBagOrShare"
          style={addToBagOrShareStyle}>
        </div>
    </div>
  );
}