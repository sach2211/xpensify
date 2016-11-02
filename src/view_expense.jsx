var React = require('react')
var request = require('superagent')

var ViewExpense = React.createClass({

viewExpenseSummary: function() {
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
},

render: function() {
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
});
module.exports = ViewExpense;