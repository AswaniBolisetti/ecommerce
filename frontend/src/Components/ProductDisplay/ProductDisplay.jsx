import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/starfill.png';
import starhalf_icon from '../Assets/starhalffill.png';
import { ShopContext } from '../../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
    const notify = () => toast("Product added to the cart!");
    const { addToCart } = useContext(ShopContext);
    const { product } = props;
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={starhalf_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="product-display-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="product-display-right-size">
                    <h1 className='select-size'>Select size</h1>
                    <div className="product-display-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div
                                key={size}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={() => { 
    addToCart(product.id);
    notify(); // Call notify function after adding to cart
}} className='add-to-cart'>Add to Cart</button>

                <p className="product-display-right-category">
                    <span>Category : </span>{product.category}
                </p>
                <p className="product-display-right-category">
                    <span>Tags : </span>Modern, Latest
                </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductDisplay;
