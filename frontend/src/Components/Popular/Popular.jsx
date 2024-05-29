import React, { useRef, useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Items/Item';
import leftArrow from '../Assets/left.png'; // Add your left arrow icon
import rightArrow from '../Assets/right.png'; // Add your right arrow icon

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const itemsPerPage = 4;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json()) // Invoke json() method correctly
      .then((data) => {
        setPopularProducts(data);
        updateScrollButtons(); // Call updateScrollButtons after data is loaded
      })
      .catch((error) => console.error('Error fetching data:', error)); // Add error handling
  }, []);

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
        left: -(scrollRef.current.clientWidth / itemsPerPage) * itemsPerPage,
        behavior: 'smooth',
      });
      setTimeout(updateScrollButtons, 500); // Adjust this timeout as necessary to match the scroll duration
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: (scrollRef.current.clientWidth / itemsPerPage) * itemsPerPage,
        behavior: 'smooth',
      });
      setTimeout(updateScrollButtons, 500); // Adjust this timeout as necessary to match the scroll duration
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateScrollButtons();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    updateScrollButtons(); // Ensure buttons are updated on component mount
  }, [popularProducts]);

  return (
    <section id="target-section">
      <div className='popular'>
        <h2>TRENDING NOW IN WOMEN</h2>
        <hr />
        <div className="carousel">
          <button 
            className="carousel-arrow left" 
            onClick={handlePrev} 
            disabled={!canScrollLeft}
          >
            <img src={leftArrow} alt="Previous" />
          </button>
          <div className="popular-item" ref={scrollRef} onScroll={updateScrollButtons}>
            {Array.isArray(popularProducts) ? popularProducts.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )) : null} {/* Ensure popularProducts is an array before mapping */}
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
    </section>
  );
};

export default Popular;
