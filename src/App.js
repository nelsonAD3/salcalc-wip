import React from 'react';
import Form from './Form/Form';
import Output from './Output/Output';
// import About from './About/About';
// import Nav from './Nav/Nav';
// import { Route } from 'react-router-dom';
import UIbar from './UIbar/UIbar';



// export const ThemeContext = React.createContext();

class App extends React.Component {
  state = {
    salary: {
      amount: 100000,
      currency: 'USD',
      type: 'base'
    },
    theme: 'Default'
  }

  handleSetTheme = (theme) => {
    this.setState({ theme })
  };


  updateSalary(salary){
    console.log('got here');
    this.setState({
      salary
    })
    console.log(salary);
  }

  render(){
    const contextValue = {
      theme: this.state.theme,
      setTheme: this.handleSetTheme
    }
    const class_name = this.state.theme;

  return (
    <div id='App'>
      
      {/* value in here is being passed from context, 
      whenever context is updated, the component is re-rendered */}
      {/* <ThemeContext.Provider value={contextValue}>
        <UIbar id='ui-bar'/>
      </ThemeContext.Provider> */}
    
      <Form handleUpdate = {salary => this.updateSalary(salary)}/>
      <Output salary={this.state.salary}/>
      
      
    </div>
  );
  }
}


export default App;