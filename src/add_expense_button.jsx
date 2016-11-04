import React from 'react'
import request from 'superagent'

class AddExpense extends React.Component{

    addNewExpense(){
        console.log("User wants to add a new Expense")

        request
        .post('http://localhost:3000/db/healthcheck/insert')
        .send({name: 'monko', age: 22})
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end(function(err, res){
            if (err) {
                console.log("Error is ", res)
            } else {
                console.log("Response is ", res)
            }
        })
    }

    render(){
      return (
        <div>
        	<div>
        		<button onClick={this.addNewExpense} className = "btn btn-success">
                    Add Expense
                </button>
        	</div>
        </div>
      )
    }
};
module.exports = AddExpense;
