import React from 'react';
import NumberFormat from 'react-number-format';
// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';

export default function Output(props){
    // console.log(this.props);
    const input = props.salary.amount;

    let tax_rate=0.0;
    if (input<9525){tax_rate=0.1}
    else if (input<38700){ tax_rate=0.12}
    else if (input<82500){ tax_rate=0.22}
    else if (input<157500){ tax_rate=0.24}
    else if (input<200000){ tax_rate=0.32}
    else if (input<500000){ tax_rate=0.35}
    else  tax_rate=0.37;

    const salary_taxed = input * (1-tax_rate);






    return(
        <div>
            <ul className='Untaxed Salary Figures'>
            <li>Annual Salary: 
                <NumberFormat value={props.salary.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </li>
            <li>Monthly Salary: 
                <NumberFormat value={props.salary.amount/12} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </li>
            <li>Bi-Monthly Salary: 
                <NumberFormat value={props.salary.amount/24} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            </ul>
            <ul className='Taxed Salary Figures'><i>Single Filers, Trump Tax Code</i>
            <li>Annual Salary: 
                <NumberFormat value={salary_taxed} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            <li>Monthly Salary: 
                <NumberFormat value={salary_taxed/12} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            <li>Bi-Monthly Salary:
                <NumberFormat value={salary_taxed/24} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            </ul>

        </div>
    );
    
}