import React from 'react'
import Card from './Card'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import  './Card.css'

function Testimonials(props) {
    let  reviews = props.reviews;

  return (
    <div className='relative'>
      
      <Card review = {reviews[0]} /> 

      <div className='left-icon'>
        < FaChevronLeft />
      </div>
      

      <div className='right-icon' >
        < FaChevronRight />
      </div>

    </div>
  )
}

export default Testimonials
