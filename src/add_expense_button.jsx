import React from 'react'
import request from 'superagent'
import {Link} from 'react-router'

class AddExpense extends React.Component{

    render(){
      return (
        <div>
        	<div>
        		<button className = "btn btn-success">
                    <Link to="/add" > Add Expense </Link>
                </button>
        	</div>
        </div>
      )
    }
};
module.exports = AddExpense;
