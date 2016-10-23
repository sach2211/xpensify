var React = require('react')
var ReactDOM = require('react-dom')
var Header = require('./Header.jsx')
require('./fb_login')

var Greeting = React.createClass({
    render: function() {
      return (
        <div>
        	<Header />
        </div>
      )
    }
  });

  ReactDOM.render(
    <Greeting/>,
    document.getElementById('app-container')
  );
