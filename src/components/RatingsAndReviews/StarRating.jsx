import React from 'react';

export const StarRating = (props) => {
  const starRating = {
    color: '#ccc',
    position: 'relative',
    margin: '0',
    padding: '0'
  }
  const fillRating = {
    color: '#e7711b',
    padding: '0',
    position: 'absolute',
    display: 'block',
    zIndex: '1',
    top: '0',
    left: '0',
    overflow: 'hidden',
    width: `${props.rating/5 * 100}%`
  }

  const span = {
    display: 'inline-block'
  }

  const emptyRating = {
    padding: '0',
    display: 'block',
    zIndex: '0'
  }

  return (
    <div className="star-ratings" style={starRating}>
      <div className="fill-ratings" style={fillRating}>
        <span style={span}>★★★★★</span>
      </div>
      <div className="empty-ratings" style={emptyRating}>
        <span style={span}>★★★★★</span>
      </div>
    </div>
  );
}