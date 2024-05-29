import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = (props) => {
  const {product} = props;
  return (
    <div>
      
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
          <div className="description-nav-box-fade">
            Reviews (122)
          </div>
         
      </div>
      <div className="descriptionbox-description">
        <p>Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        </p>
        <p>
        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
        Men Green Solid Zippered
        </p>
      </div>
    </div>
    <hr />
    <div className="in-box">
      <h2>What is in the box?</h2>
      <li>1 X {product.pname}</li>
    </div>
    <hr />
    </div>
  )
}

export default DescriptionBox
