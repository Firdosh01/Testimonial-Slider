import React from 'react'
import Testimonials from './Testimonials'
import reviews from './data'
import  './Card.css'


function App() {

  return (
    <div className='body'>

      <div className='heading-text'>
        <h1>Our Testimonials</h1>
      </div>

      <div></div>

      <Testimonials reviews= {reviews} />
      

    </div>
  )
}

export default App
