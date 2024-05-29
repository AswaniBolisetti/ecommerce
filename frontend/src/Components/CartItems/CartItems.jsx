import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cross.png';
const CartItems = () => {
    const {all_product, cartItems, removeFromCart, addToCart, cartValueToZero, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_product.map((e)=>{
            if(cartItems[e.id] > 0){
                return <div>
                <div className="cartitems-format">
                    <img src={e.image} alt="" className='cartitems-product-icon'/>
                    <p>{e.name}</p>
                    <p>₹{e.new_price}</p>
                    <button className='cartitems-quantity'><button className='left-button' onClick={()=>{removeFromCart(e.id)}}>-</button>{cartItems[e.id]}<button className='right-button' onClick={()=>{addToCart(e.id)}}>+</button></button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} onClick={()=>{cartValueToZero(e.id)}} alt="" />
                </div>
                <hr />
              </div>
            }
            else{
                return null;
            }

        })
      }
      <div className="cartitems-down">
        <div className="cart-items-total">
            <h1 className='cart-totals'>cart totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
                </div>
                <button className='check-out'>Check Out</button>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default CartItems
