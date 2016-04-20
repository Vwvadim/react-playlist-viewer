import React, { Component, PropTypes } from 'react';

export default class Item
extends Component{

  PropTypes: {
    name: PropTypes.string
  };

  render () {
    return (
    <div className="item">
      {this.props.name}
    </div>
  );
  }
}
