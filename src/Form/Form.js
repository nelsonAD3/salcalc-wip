import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


export default class Form extends Component{
    constructor(props) {
    super(props);
    this.state = {
        salary: {
            amount: 100000,
            currency: 'USD',
            type: 'base'
            }
        }
    }

    salaryChanged(salary){
        console.log('changing salary state')
        this.setState({
          salary:{
            amount: salary,
            currency: 'USD',
            type: 'base'
          }
        });
        
        
    }

    handleSubmit(e) {
        console.log('handling submit...')
        e.preventDefault();
        // salaryChanged(e.target.value);
        this.props.handleUpdate(this.state.salary);
    }

    render(){
    return (
        <div>
            <form onSubmit={e => this.handleSubmit(e)}>
                <span>Enter Annual Salary ($): </span>
                <input 
                type="number"
                name="amount"
                id="amount"
                min="1"
                value={this.state.salary.amount}
                onChange={e => this.salaryChanged(e.target.value)}
                required
                placeholder="35,000">
                </input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
    }
    
}