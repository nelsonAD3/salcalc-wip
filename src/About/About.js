import React, {Component} from 'react';
import './About.css';


export default class About extends Component {

    render(){
        return(
            <div class="about">This is a simple app designed to calculate base income, income after federal and fica taxes, and your bonus. The next release will include State and City taxes. Future releases wll include deductions and other special filings.</div>
        );
    }

}

