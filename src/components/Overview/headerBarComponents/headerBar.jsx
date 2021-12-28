import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  border: 'solid'
}

export const HeaderBar = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  return (
    <div
      style={headerStyle}>
      <div
        className="logo">
        Logo
      </div>
      <div
        className="searchBar">
        Search Bar
      </div>
    </div>
  );
}