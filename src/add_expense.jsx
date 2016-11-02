var React = require('react')
var request = require('superagent')

var AddExpense = React.createClass({

addNewExpense: function() {
    console.log("User wants to add a new Expense")

    request
    .post('http://localhost:3000/db/healthcheck/insert')
    .send({name: 'sasaaaasss', age: 22})
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
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
    	<div className = "col-sm-4">
    		<button onClick={this.addNewExpense}> 
                Add Expense
            </button>
    	</div>
    </div>
  )
}
});
module.exports = AddExpense;