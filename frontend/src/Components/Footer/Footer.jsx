import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/icon3.png';
import instagram_icon from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png'
import meta from '../Assets/meta.png'


const Footer = () => {
    const handleBackToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div>
        
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>StyleStreet</p>
        </div>
        {/* <h4>find your fashion with affordability</h4> */}
      
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h2 className='connet'>Connect with us</h2>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        
        <div className="footer-icons-container">
            <img src={meta} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={twitter} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>© 2024 - All Rights Reserved Worldwide</p>
    </div>
    </div> 
    <h3 className='back-to-top' onClick={handleBackToTop}>Back to top</h3>
    </div>
  )
}

export default Footer
