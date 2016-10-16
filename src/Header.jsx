var React = require('react')

var Header = React.createClass({
render: function() {
  return (
    <div>
    	<div>
    		Sachin Chopra
    	</div>

    	<div className = "col-sm-4">
    		<ul className="redHead">
    			<li>About Me</li>
    			<li>Work</li>
    			<li>Projects</li>
    			<li>Contacts</li>
    		</ul>
    	</div>

    	<div className = "col-sm-4">
    		<ul class="">
    			<li>About Me</li>
    			<li>Work</li>
    			<li>Projects</li>
    			<li>Contacts</li>
    		</ul>
    	</div>

    	<div className = "col-sm-4">
    		<ul class="">
    			<li>About Me</li>
    			<li>Work</li>
    			<li>Projects</li>
    			<li>Contacts</li>
    		</ul>
    	</div>

    	
    </div>
  )
}
});
module.exports = Header;