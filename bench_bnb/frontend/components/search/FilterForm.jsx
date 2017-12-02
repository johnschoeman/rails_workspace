import React, { Component } from 'react';

export default class FilterForm extends Component {

  _handleChange(key) {
    return (e) => {
      this.props.updateFilter(key, e.target.value)
    }
  }

  render() {
    return (
      <div>
        <label>
          Min Seating
          <input 
            type="number"
            value={this.props.minSeating}
            onChange={this._handleChange('minSeating')}
            />
        </label>
        <label>
          Max Seating
          <input 
            type="number"
            value={this.props.maxSeating}
            onChange={this._handleChange('maxSeating')}
            />
        </label>
      </div>
    );
  }
}