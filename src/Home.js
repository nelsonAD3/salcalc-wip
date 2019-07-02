import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UIbar from './UIbar/UIbar';
import App from './App';
import Nav from './Nav/Nav';
import About from './About/About';
import './Home.css';

export const ThemeContext = React.createContext();

export default class Home extends React.Component{
    state = {
        theme: 'Default'
    }

    handleSetTheme = (theme) => {
        this.setState({ theme })
      };

    render(){
        const contextValue = {
            theme: this.state.theme,
            setTheme: this.handleSetTheme
        }
        
        const class_name = this.state.theme;

        return(
            <div>
                <div id='home' className={class_name}>
                    <h1>SalCalc</h1>
                    
                        <BrowserRouter>
                            <Nav themeState={class_name}/>
                            <ThemeContext.Provider value={contextValue}>
                                <UIbar id='ui-bar'/>
                            </ThemeContext.Provider>
                            <main >
                            <Route exact path='/' component={App}/>
                            <Route path='/About' component={About}/>
                            </main>
                        </BrowserRouter>    
                        
                    
                
                </div>
                <footer className={class_name}>
            Made by Nelson A. D. III
                </footer>
            </div>
        );
    }


}
