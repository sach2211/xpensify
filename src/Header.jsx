var React = require('react')
var request = require('superagent')


var Header = React.createClass({

addNewExpense: function() {
    console.log("User wants to add a new Expense")
    // request
    // .get('http://localhost:3000/db/healthcheck')
    // .end(function(err, res){
    //     if (err) {
    //         console.log("Error is ", res)
    //     } else {
    //         console.log("Response is ", res)
    //     }
    // })
    // 
    
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

viewExpenseSummary: function() {
    console.log("User wants to Viw summary of expenses")
},

render: function() {
  return (
    <div>
    	<div className = "col-sm-4">
    		<h3 className="redHead">
                Xpensify ~
            </h3>
    	</div>

    	<div className = "col-sm-4">
    		<button onClick={this.addNewExpense}> 
                Add Expense
            </button>
    	</div>

    	<div className = "col-sm-4">
    		<button onClick={this.viewExpenseSummary}> 
                View Summary
            </button>
    	</div>

    	
    </div>
  )
}
});
module.exports = Header;