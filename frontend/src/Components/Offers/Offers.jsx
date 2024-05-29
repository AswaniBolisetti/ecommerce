import React from 'react';
import './Offers.css';
// import exclusive_image from '../Assets/hero_image8.png';
import back from '../Assets/offer4.jpg';

const Offers = () => {
  const scrollToSection = () => {
    const section = document.getElementById('new-collections-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
  
  return (
    <div className='offers'style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'contain', // Changed from 'cover' to 'contain'
        backgroundRepeat: 'no-repeat',
        
      }}>
        <div className="offers-left">
            <h1>Hurry,</h1>
            <h1>Offer Ends Soon!</h1>
            <p>BEST SELLER DEALS INSIDE</p>
            <button onClick={scrollToSection}>Check Now</button>

            
        </div>
        
    </div>
  )
}

export default Offers
