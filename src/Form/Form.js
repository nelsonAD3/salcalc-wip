import React, {Component} from 'react';
// import ReactDOM from 'react-dom';



export default class Form extends Component{
    constructor(props) {
    super(props);
    this.state = {
        salary: {
            // amount: 0,
            amount:{
                value: 0
              },
            currency: '',
            type: 'base',
            // country: '',
            // state: '',
            // taxes: {
            //     federal_income_tax_owed: 0,
            //     state_income_tax_owed: 0,
            //     local_income_tax_owed: 0,
            // }
            }

        }
    }

    salaryChanged(salary){
        // console.log(this.state.salary.amount)
        this.setState({
          salary:{
            // amount: salary,
            amount: {amount: salary},
            currency: 'USD',
            type: 'base'
          }
        });
        
        // handleUpdate(salary);
        
    }

    handleSubmit(e) {
        // console.log('handling submit...')
        e.preventDefault();
        // salaryChanged(e.target.value);
        // this.props.handleUpdate(this.state.salary);
    }

    render(){
    return (
        <div>
            {/* <form onSubmit={e => this.handleSubmit(e)}> */}
            <form onSubmit={e => this.handleSubmit(e)}>
                <span>Enter Annual Gross Income ($): </span>
                <input 
                
                name="amount"
                id="amount"
                // minValue={0}
                type="number"
                // value={this.state.salary.amount.value}
                onChange={e => this.props.handleUpdate(e.target.value)}
                // onChange={value => this.props.handleUpdate({value})}
                required
                placeholder="35,000"
                // maxValue=999999999999
                // defaultValue=''
                >
                </input>
                {/* <button type='submit'>Submit</button> */}
            </form>
        </div>
    );
    }
    
}