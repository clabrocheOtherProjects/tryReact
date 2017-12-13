import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item/Item';
import DefaultStyle from '../../Config/DefaultStyle';
import './Navbar.css';
class Navbar extends Component {
  render () {
    const theme = DefaultStyle[DefaultStyle.currentTheme];
    return (
      <div className='Navbar' style={{width:theme.navbarWidth}}>
        <Item name='Monitor' link='/Monitor' icon="fa fa-desktop"/>
        <Item name='Logs' link='/Logs' />
      </div>
    );
  }
}

export default Navbar;
