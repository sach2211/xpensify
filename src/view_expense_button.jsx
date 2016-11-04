import React from 'react'
import request from 'superagent'


class ViewExpense extends React.Component{

    viewExpenseSummary(){
        console.log("User wants to Viw summary of expenses")

        request
        .get('http://localhost:3000/db/healthcheck/')
        .set('Accept', 'application/json')
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
        		<button onClick={this.viewExpenseSummary} className = "btn btn-info"> 
                    View Summary
                </button>
        	</div>    	
        </div>
      )
    }
};
module.exports = ViewExpense;