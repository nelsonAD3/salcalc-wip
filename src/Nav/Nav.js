import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// import { BrowserRouter } from "react-router-dom";
// import Content from './Content'
// import './Nav.css';
import { ThemeContext } from '../Home';

export default class Nav extends Component {
  render() {
    return (
      // <ThemeContext.Consumer>

      /* {({theme, setTheme} ) => {
            if (theme==='Default'){
                return <button id='theme-button' className={theme} onClick={() => setTheme('Dark')} >Dark Mode</button>
            }
            else if (theme==='Dark'){
                console.log('got here')
                return <button id='theme-button' className={theme} onClick={() => setTheme('Default')} >Default</button>
            }

        //   return <button onClick={() => setTheme('dark')} >{theme}</button>
        //   return <div>{theme}</div>
        }} */

      <div className='Navdiv'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/About'>
          About
        </Link>
      </div>
      // </ThemeContext.Consumer>
      
    )
  }
}