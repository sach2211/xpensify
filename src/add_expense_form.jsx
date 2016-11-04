import React from 'react'
import {render} from 'react-dom'
import request from 'superagent'
export default class AddExpenseForm extends React.Component{

	componentWillMount() {
		console.log("Hello World from AddExpenseForm ")
	}
	
	addNewExpense(title, amount, description){
        console.log("User wants to add a new Expense")

        request
        .post('http://localhost:3000/db/healthcheck/insert')
        .send({'title': title, 'amount': amount, 'description': description, 'timestamp': new Date().getTime()})
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
    newExpenseValidation() {
    	console.log("I will validate the new form ", this)
    	let title = document.getElementById('transaction_title').value,
    	amount = document.getElementById('transaction_amount').value,
    	description = document.getElementById('transaction_description').value

    	// validation of the input fields is pending

    	console.info(" Adding these transaction_data ",  title, amount, description)
    	this.addNewExpense(title, amount, description)

    }
	render() {
		return (
				<div>
					<div> Hello from AddExpenseForm  </div>
					
					<div>
						Title: 
						<input type="text" id="transaction_title" name="transaction_title" /><br/>
						Amount:
						<input type="number" id="transaction_amount" name="transaction_amount" /><br />
						Description: 
						<input type="text" id="transaction_description" name="transaction_description" /><br />
						<button onClick={this.newExpenseValidation.bind(this)} >  Add This </button>
					</div>

				</div>
			)
	}

}