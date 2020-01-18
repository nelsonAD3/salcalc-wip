import React from 'react';
import NumberFormat from 'react-number-format';
// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';

export default function Output(props){

    // const MA_Tax = .051;
    // const NY_Tax = 
    
    const gross_income = props.salary.value;
    // console.log(props.salary.value);
    const high_bonus = gross_income*.15;
    const med_bonus = gross_income*.10;
    const low_bonus = gross_income*.05;

    const bonus_tax_estimate = .4;
    

    const taxed_high_bonus = high_bonus * bonus_tax_estimate;
    const taxed_med_bonus = med_bonus * bonus_tax_estimate;
    const taxed_low_bonus = low_bonus * bonus_tax_estimate;

    const standard_deduction_amount = 12200;

    const taxable_income = gross_income-standard_deduction_amount;

    //FICA Tax goes first
    const FICA_tax = .0765
    let FICA_tax_owed = taxable_income * FICA_tax;
    // let State_tax_owed = taxable_income * MA_Tax;
    let Federal_tax_owed;

    //fed tax info
    const t1 = 9525;
    const t2 = 38700;
    const t3 = 82500;
    const t4 = 157500;
    const t5 = 200000;
    const t6 = 500000;

    const r1=0.1;
    const r2=0.12;
    const r3=0.22;
    const r4=0.24;
    const r5=0.32;
    const r6=0.35;
    const r7=0.37;

    const tr1 = t1*r1;
    const tr2 = tr1 + (t2-t1)*r2;
    const tr3 = tr2 + (t3-t2)*r3;
    const tr4 = tr3 + (t4-t3)*r4;
    const tr5 = tr4 + (t5-t4)*r5;
    const tr6 = tr5 + (t6-t5)*r6;
    // const tr7 = tr6 + (t7-t6)*r7;


    let tax_rate=0.0;
    if (taxable_income<t1){
        tax_rate=r1
        Federal_tax_owed = taxable_income * tax_rate;
    }
    else if (taxable_income<t2){
        tax_rate=r2
        Federal_tax_owed = taxable_income * tax_rate+tr1;
    }
    else if (taxable_income<t3){ 
        tax_rate=r3
        Federal_tax_owed = taxable_income * tax_rate+tr2;
    }
    else if (taxable_income<t4){ 
        tax_rate=r4
        Federal_tax_owed = taxable_income * tax_rate+tr3;
    }
    else if (taxable_income<t5){
        tax_rate=r5
        Federal_tax_owed = taxable_income * tax_rate+tr4;
    }
    else if (taxable_income<t6){ 
        tax_rate=r6
        Federal_tax_owed = taxable_income * tax_rate+tr5;
    }
    else  if (taxable_income>t6) {
        tax_rate=r7
        Federal_tax_owed = taxable_income * tax_rate+tr6;
    }

    else {};

    let final_salary = gross_income - Federal_tax_owed - FICA_tax_owed /*- State_tax_owed*/;
    // console.log(final_salary)
    // console.log(Federal_tax_owed)
    // console.log(FICA_tax_owed)
    // console.log(State_tax_owed)

    if (gross_income<=12201){
        final_salary=gross_income
        // console.log("in loop, final salary="+final_salary)
    }


    return(
        <div>
            <ul className='Untaxed Salary Figures'><i>Base Salary Figures</i>
            <li>Annual Salary: 
            <NumberFormat value={final_salary/1} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </li>
            <li>Monthly Salary: 
                <NumberFormat value={final_salary/12} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
            </li>
            <li>Bi-Monthly Salary: 
                <NumberFormat value={final_salary/24} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            </ul>
            <ul className='Taxed Salary Figures'><i>Single Filers, After Federal Tax (Trump)</i>
            <li>Annual Salary: 
                <NumberFormat value={final_salary} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            <li>Monthly Salary: 
                <NumberFormat value={final_salary/12} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            <li>Bi-Monthly Salary:
                <NumberFormat value={final_salary/24} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            </ul>
            <ul className='Taxed Bonus Figures'><i>Bonus after Tax (est. 40%)</i>
            <li>High Bonus after Taxes (15%): 
                <NumberFormat value={taxed_high_bonus} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            <li>Medium Bonus after Taxes (10%): 
                <NumberFormat value={taxed_med_bonus} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            <li>Low Bonus after Taxes (5%):
                <NumberFormat value={taxed_low_bonus} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
            </li>
            </ul>

        </div>
    );
    
}

// Output.defaultProps = {
//     value: 1
//   };