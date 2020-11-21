import React from 'react';

import { InfoBox } from '../info-box/info-box.component';
import { SearchBar } from '../search-bar/search-bar.component';
import { ProductTable } from '../product-table/product-table.component';

import './filterable-product-table.styles.css';

const products = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      checkboxValue: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleCheckbox(e) {
    this.setState({
      checkboxValue: e.target.checked,
    });
  }

  filterProducts(products) {
    const filteredProducts = products.filter((product) => {
      return (
        product.name
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(this.state.searchValue.replace(/\s/g, '').toLowerCase()) &&
        (this.state.checkboxValue ? product.stocked : true)
      );
    });
    return filteredProducts;
  }

  render() {
    const filteredProducts = this.filterProducts(products);

    return (
      <div className='filterable-product-table'>
        <InfoBox text='Searchable Stock Control Application' />
        <SearchBar
          placeholder='Search Products'
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          checked={this.state.checkboxValue}
          handleCheckbox={this.handleCheckbox}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}
