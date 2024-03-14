import React from 'react';
import Pic from './assets/pic.png';

const Card = (props) => {
  return (
    <div className="card">
      <img className='card-image' src={Pic} alt="profile picture"></img>
      <h2 className='card-title'>{props.name}</h2>
      <p className='card-text'>{props.email}</p>
    </div>
  )
}

export default Card;