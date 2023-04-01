import React from 'react'
// import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import  './Card.css'

function Card(props) {
    let review = props.review
  return (
        
    <div className='wrapper'>
    

      <div>
        {review.text}
      </div>

      <div className='logo'>
        <img src={review.image} />
      </div>

      <div>
        <p>{review.name}</p>
        <p>{review.job}</p>
      </div>



      </div>
  )
}

export default Card