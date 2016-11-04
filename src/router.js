import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './home.jsx'
import FbLogin from './fb_login_box.jsx'


import AddExpenseForm from './add_expense_form.jsx'
import ViewExpenseChart from './view_expense_chart.jsx'

render(
	<Router history={hashHistory}>
	  	<Route path="/" component={Home}/>
	  	<Route path="/login" component={FbLogin}/>
	    <Route path="/add" component={AddExpenseForm}/>
	    <Route path="/view" component={ViewExpenseChart}/>
	</Router>, 

	document.getElementById('app-container')
)