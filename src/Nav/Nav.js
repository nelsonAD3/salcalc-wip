import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class Nav extends Component {
  render() {
    return (


      <div className='Navdiv'>
        <Link className={this.props.themeState} to='/'>
          Home
        </Link>
        <Link className={this.props.themeState} to='/About'>
          About
        </Link>
      </div>
     
      
    )
  }
}