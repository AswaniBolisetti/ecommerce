import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className='shopcategory-banner' style={{
        backgroundImage: `url(${props.banner})`,
        backgroundSize: 'contain', // Changed from 'cover' to 'contain'
        backgroundRepeat: 'no-repeat',
        width: '100%', // Ensure the container has a width
        height: '400px' 
      }}>
    </div>
    <div className="shopcategory-indexSort">
      <p>
      
        <span>Viewing 1 - 16 </span> of 48 products
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategory-products">
      {
        all_product.map((item,i)=>{
          if(props.category===item.category){
            
            return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
          }
          else{
            return null;
          }

        })
      }
    </div>
    <div className="shopcategory-loadmore">
    Check Out More
    </div>
    </div>
  )
}

export default ShopCategory
