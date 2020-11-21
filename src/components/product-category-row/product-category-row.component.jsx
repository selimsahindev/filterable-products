import React from 'react';

import './product-category-row.styles.css';

export class ProductCategoryRow extends React.Component {
  render() {
    return <h3>{this.props.title}</h3>;
  }
}
