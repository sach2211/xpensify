var React = require('react')
var ReactDOM = require('react-dom')

var AddExpense = require('./add_expense_button.jsx')
var ViewExpense = require('./view_expense_button.jsx')

//require('./fb_login')

var Home = React.createClass({
    render: function() {
      return (
        <div>
          <div className = "col-sm-4">
            <h3 className="redHead">
                Xpensify ~
            </h3>
          </div>

          <div className = 'row' >
            
            <div className = 'col-md-6  mainButtons'>
            	<ViewExpense />
            </div>
            
            <div className = 'col-md-6  mainButtons'>
              <AddExpense />
            </div>
          
          </div>          
        </div>
      )
    }
  });
 // var Home = React.createClass({

 //    componentWillMount: function() {
 //        console.log("Component is mounting")
 //    },
 //    render: function() {
 //        return (
 //                <div> Hello World </div>
 //            )
 //    }
 // })
module.exports = Home

  // ReactDOM.render(
  //   <Greeting/>,
  //   document.getElementById('app-container')
  // );