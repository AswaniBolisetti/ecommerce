import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/price_tag.png';
import arrow_icon from '../Assets/arrow-right.png';
import back from '../Assets/back5.jpg';

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById('target-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  return (
    <div className='hero' style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'contain', // Changed from 'cover' to 'contain'
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="hero-left">
        <h2>Here Fashion Meets Affordability....</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>A New</p>
            <img src={hand_icon} alt='' />
          </div>
          <p>Perspective</p>
          <p>on Fashion</p>
        </div>
        <div className="hero-latest-btn" onClick={scrollToSection}>
          <div>Shop Now</div>
          <img src={arrow_icon} alt=''/>
        </div>
      </div>
      {/* <div className="hero-right">
        <img src={hero_image4} alt=''/>
      </div> */}
    </div>
  )
}

export default Hero;
