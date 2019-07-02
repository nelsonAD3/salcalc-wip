import React from 'react';
import Form from './Form/Form';
import Output from './Output/Output';


class App extends React.Component {
  state = {
    salary: {
      amount: 0,
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
    // const class_name = this.state.theme;

  return (
    <div id='App'>
      <Form handleUpdate = {salary => this.updateSalary(salary)}/>
      <Output salary={this.state.salary}/>
    </div>
  );
  }
}


export default App;