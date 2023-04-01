import React from 'react'
import Testimonials from './Testimonials'
import reviews from './data'

function App() {

  return (
    <div>

      <div>
        <h1>Our Testimonials</h1>
      </div>

      <div></div>

      <Testimonials reviews= {reviews} />
      

    </div>
  )
}

export default App
