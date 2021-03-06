/* eslint-disable react/prop-types */
import React, {useState} from 'react';

export const SelectableStars = (props) => {

  const [rating, useRating] = useState('0%');
  const [selected, useSelect] = useState(false);

  const starRating = {
    unicodeBidi: 'bidi-override',
    color: '#F5F5F5',
    position: 'relative',
    margin: '0',
    padding: '0',
    fontSize: '45px'
  }
  const fillRating = {
    color: '#77ff2e',
    padding: '0',
    position: 'absolute',
    display: 'block',
    zIndex: '2',
    top: '0',
    left: '0',
    overflow: 'hidden',
    width: rating
  }

  const span = {
    display: 'inline-block',
  }

  const emptyRating = {
    padding: '0',
    display: 'block',
    zIndex: '0'
  }

  const mouseOutHandler = () => {
    if (!selected) {
      useRating('0%');
    }
  }

  let ratingStatement;

  switch(rating) {
    case '20%':
      ratingStatement = "Poor";
      break;
    case '40%':
      ratingStatement = "Fair";
      break;
    case '60%':
      ratingStatement = "Average";
      break;
    case '80%':
      ratingStatement = "Good";
      break;
    case '100%':
      ratingStatement = "Great";
      break;
    default:
      ratingStatement = '';
      break;
  }

  const clickHandler = (e) => {
    if (!selected) {
      useSelect(true);
      props.useRating( Number(e.target.getAttribute('value')) )
    } else {
      useSelect(false);
      props.useRating(null);
    }
  }

  return (
    <div style={{height: '70px'}}>
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <div className="star-ratings" style={starRating}>
          <div className="fill-ratings" style={fillRating}>
            <span style={span}>
              <span value="1" name="1" onMouseOut={mouseOutHandler} onClick={clickHandler}>★</span>
              <a value="2" onMouseOut={mouseOutHandler} onClick={clickHandler}>★</a>
              <a value="3" onMouseOut={mouseOutHandler} onClick={clickHandler}>★</a>
              <a value="4" onMouseOut={mouseOutHandler} onClick={clickHandler}>★</a>
              <a value="5" onMouseOut={mouseOutHandler} onClick={clickHandler}>★</a>
            </span>
          </div>
          <div className="empty-ratings" style={emptyRating}>

            <span style={span}>
              <a value="1" onMouseOver={() => selected ? null: useRating('20%')}>★</a>
              <a value="2" onMouseOver={() => selected ? null: useRating('40%')}>★</a>
              <a value="3" onMouseOver={() => selected ? null: useRating('60%')}>★</a>
              <a value="4" onMouseOver={() => selected ? null: useRating('80%')}>★</a>
              <a value="5" onMouseOver={() => selected ? null: useRating('100%')}>★</a>
            </span>
          </div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent: 'space-around'}}>
        <div style={{fontSize: '12px'}}>{ratingStatement}</div>
      </div>
    </div>

  );
}
