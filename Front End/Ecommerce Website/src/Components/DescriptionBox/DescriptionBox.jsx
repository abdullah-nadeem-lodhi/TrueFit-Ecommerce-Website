import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem magnam minus consectetur quis illo nulla error? Laudantium cumque incidunt perspiciatis perferendis corrupti quasi a, quos, consequatur, odio aliquid veniam?</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur quas enim cum sint, maiores nobis minus at blanditiis, quasi nulla, perferendis beatae dolores molestias eaque minima voluptas laborum dolorem?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
