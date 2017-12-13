import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultStyle from '../../../Config/DefaultStyle';
import './Item.css';
class Item extends Component {
  render () {
    const theme = DefaultStyle[DefaultStyle.currentTheme];
    return (
      <div className='Item' style={{width: theme.navbarWidth, height:theme.navbarWidth}}>
        <i className={this.props.icon} aria-hidden='true'></i>
        <Link to={this.props.link}>
        {this.props.name}
        </Link>
      </div>
    );
  }
}

export default Item;
