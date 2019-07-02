import React, {Component } from 'react';
// import App from '../App';
import { ThemeContext } from '../Home';
import './ThemeButton.css';


export default class ThemeButton extends Component {
    // state {

    // }

    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    // static contextType = ThemeContext;
    render() {
      return (
    //     <ThemeContext.Consumer>
    //   <div>{this.context}</div>
    //     </ThemeContext.Consumer>
    <ThemeContext.Consumer>


        {( {theme, setTheme} ) => {
            if (theme==='Default'){
                return <button id='theme-button' className={theme} onClick={() => setTheme('Dark')} ></button> 
            }
            else if (theme==='Dark'){
                console.log('got here')
                return <button id='theme-button' className={theme} onClick={() => setTheme('Default')} ></button>
            }

        //   return <button onClick={() => setTheme('dark')} >{theme}</button>
        //   return <div>{theme}</div>
        }}

        {/* <div>{theme}</div> */}

    </ThemeContext.Consumer>


      );
    }
}
  


//     render() {
//         return (
//           <>
//             <em>With Class.contextType:</em>
//             <pre>
//               Context value: {JSON.stringify(this.context)}
//               {"\n"}
//               Private value within the context object:{" "}
//               {JSON.stringify(Context._currentValue)}
//             </pre>
//           </>
//         );
//       }
//     }
// ThemeButton.contextType = Context;

