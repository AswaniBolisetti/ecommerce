import React from 'react';
import './NewsLetter.css';
// import newsletter from '../Assets/i1.jpg'

const NewsLetter = () => {

  return (
      <div className='news-letter'>
        {/* <div>
          <img src={newsletter} alt="" />
        </div> */}
        <h1>Stay in touch</h1>
        <p>Subscribe to our newsletter and get exclusive offers to your mail</p>
        <div className='subs'>
          <input type="email" placeholder='Enter Email id' />
          <button>Subscribe</button>
        </div>
      </div>
  );
}

export default NewsLetter;
