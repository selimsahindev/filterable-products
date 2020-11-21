import React from 'react';

import './product-row.styles.css';

export const ProductRow = ({ stocked, price, name }) => {
  return (
    <div className='product-row'>
      <div className={'product-title' + (stocked ? '' : ' product-title-red')}>
        {name}
      </div>
      <div className='product-price'>{price}</div>
    </div>
  );
};
