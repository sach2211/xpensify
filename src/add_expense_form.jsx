import React from 'react'
import {render} from 'react-dom'

export default class AddExpenseForm extends React.Component{

	componentWillMount() {
		console.log("Hello World from AddExpenseForm ")
	}
	render() {
		return (
				<div> Hello from AddExpenseForm  </div>
			)
	}

}