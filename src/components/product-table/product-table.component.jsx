import React from 'react';

import { ProductCategoryRow } from '../product-category-row/product-category-row.component';
import { ProductRow } from '../product-row/product-row.component';

import './product-table.styles.css';

export class ProductTable extends React.Component {
  render() {
    const products = this.props.products;
    let categories = [];
    let elements = [];

    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
        let categoryName = product.category;

        elements.push(
          <ProductCategoryRow key={categoryName} title={categoryName} />
        );
        products.forEach((product) => {
          if (product.category === categoryName) {
            elements.push(
              <ProductRow
                key={product.name}
                name={product.name}
                stocked={product.stocked}
                price={product.price}
              />
            );
          }
        });
      }
    });

    return (
      <div>
        {products.length === 0 ? (
          'Nothing Found.'
        ) : (
          <div className='title-row'>
            <div className='title-name'>Name</div>
            <div className='title-price'>Price</div>
          </div>
        )}
        {elements}
      </div>
    );
  }
}
