import React from 'react'
import Card from './Card'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import  './Card.css'
import { useState } from 'react'

function Testimonials(props) {
    let  reviews = props.reviews;

    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }


  return (
    <div className='relative'>
      
      <Card review = {reviews[0]} /> 

      <div className='left-icon' onClick={leftShiftHandler}>
        < FaChevronLeft />
      </div>
      

      <div className='right-icon' onClick={rightShiftHandler}>
        < FaChevronRight />
      </div>

    </div>
  )
}

export default Testimonials
