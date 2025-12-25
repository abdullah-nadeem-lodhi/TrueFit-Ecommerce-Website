import React from 'react'
import './Hero.css'
import handIcon from '../Assests/hand_icon.png'
import arrowIcon from '../Assests/arrow.png'
import heroImage from '../Assests/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS</h2>
        <div className="hero-hand-icon">
            <p>New</p>
            <img src={handIcon} alt="" />
        </div>
        <p>Collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt="" />
        </div>
      </div>
      
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
