import React, {useState} from 'react';
import { SelectableStars } from './SelectableStars.jsx';
import { CharacteristicsForm } from './CharacteristicsForm.jsx';

export const NewReview = (props) => {
  // const [answers, useAnswers] = useState(() => {
  //   return {
  //     recommend: 'Yes',
  //     summary: '',
  //     review: '',
  //     nickname: '',
  //     email: '',
  //     file: []
  //   }
  // })

  const [recommend, useRecommend] = useState('Yes');
  const [summary, useSummary] = useState('');
  const [reviewBody, useReviewBody] = useState('');
  const [nickname, useNickname] = useState('');
  const [email, useEmail] = useState('');
  const [file, useFile] = useState('');

  const styleModal = {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }

  const styleForm = {
    display:'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: '20% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '70%',
    borderRadius: '5px'
  }

  const clickHandler = (event) => {
    props.setModal(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div style={styleModal}>
      <div style={styleForm}>
      <span onClick={clickHandler}>&times;</span>
      <h4>Add Your Review</h4>
      <form onSubmit={submitHandler}>
        <SelectableStars />
        <div>
          <p>Do you recommend this product?</p>
          <label htmlFor="recommendYes">Yes</label>
          <input
            onChange={(event)=>useRecommend(event.target.value)}
            type="radio"
            name="recommend"
            id="recommendYes"
            value="Yes" defaultChecked>
          </input>
          <label htmlFor="recommendNo">No</label>
          <input
            onChange={(event)=>useRecommend(event.target.value)}type="radio" name="recommend" id="recommendNo" value="No">

          </input>
        </div>
        <div>
          <p>Characteristics Ratings</p>
          <CharacteristicsForm char={Object.keys(props.meta.characteristics)[0]}/>
        </div>
        <div>
          <p>Review Title</p>
          <input onChange={(e) => useSummary(e.target.value)}type="text" placeholder="Example: Best purchase ever!"></input>
        </div>
        <div>
          <p>Review: </p>
          <input onChange={(e) => useReviewBody(e.target.value)}type="textarea" placeholder="Why did you like the product or not?"></input>
        </div>
        <input onChange={(e)=>console.log(document.getElementById('myFile').files)} type="file" id="myFile" name="filename"></input>
        {file !== '' ? <img style={{width: '50px'}} src={file}></img> : null}
        <label htmlFor="nickname">Nickname: </label>
        <input onChange={(e) => useNickname(e.target.value)} id="nickname" type="textarea"></input>
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => useEmail(e.target.value)} type="email"></input>
        <input type="submit" value="Submit!!"></input>
      </form>

      </div>
    </div>
  )
}