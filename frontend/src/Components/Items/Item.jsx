import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  const scrollToSection = () => {
    const section = document.getElementById('target-section-item');
    if (section) {
      section.scrollIntoView();
    }
  }; 
  return (
    <div className='item' onClick={scrollToSection}>
        <div className='images-container'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt='' className='popular-image'/></Link>
       
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        ₹{props.new_price}
        </div>
        <div className="item-price-old">
        ₹{props.old_price}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Item
