import React, { useEffect, useRef, useState, useContext } from 'react';
import './RelatedProducts.css';
import Item from '../Items/Item';
// import all_product from '../Assets/all_product';
import leftArrow from '../Assets/left.png';
import { ShopContext } from '../../Context/ShopContext';
import rightArrow from '../Assets/right.png';

const RelatedProduct = (props) => {
  // const itemsPerPage = 4;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const {all_product} = useContext(ShopContext);
  // console.log("propss",props.product.category);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: 'smooth',
      });
      setTimeout(updateScrollButtons, 600);
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: 'smooth',
      });
      setTimeout(updateScrollButtons, 600);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div> 
      <h2 className='relatedproducts-tag'>Products related to this item</h2>
    
    <div className='relatedproducts'>
      
      <hr />
      <div className="carousel">
        <button 
          className="carousel-arrow left" 
          onClick={handlePrev} 
          disabled={!canScrollLeft}
        >
          <img src={leftArrow} alt="Previous" />
        </button>
        <div className="relatedproducts-item" ref={scrollRef} onScroll={updateScrollButtons}>
          {
            all_product.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price} 
                  />
                );
              } else {
                console.log(props.category,item.category)
                return null;
              }
            })
          }
        </div>
        <button 
          className="carousel-arrow right" 
          onClick={handleNext} 
          disabled={!canScrollRight}
        >
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default RelatedProduct;
