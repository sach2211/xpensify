var React = require('react')
var ReactDOM = require('react-dom')

var AddExpense = require('./add_expense.jsx')
var ViewExpense = require('./view_expense.jsx')

require('./fb_login')

var Greeting = React.createClass({
    render: function() {
      return (
        <div>
          <div className = "col-sm-4">
            <h3 className="redHead">
                Xpensify ~
            </h3>
          </div>
          <div>
          	<ViewExpense />
          </div>
          <div>
            <AddExpense />
          </div>
        </div>
      )
    }
  });

  ReactDOM.render(
    <Greeting/>,
    document.getElementById('app-container')
  );
