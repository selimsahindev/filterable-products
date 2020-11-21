import React from 'react';

import './search-bar.styles.css';

export class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar'>
        <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.props.searchValue}
          onChange={this.props.handleSearch}
        />
        <br />
        <label>
          <input
            type='checkbox'
            checked={this.props.checked}
            onChange={this.props.handleCheckbox}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}
