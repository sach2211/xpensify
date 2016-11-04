import React from 'react'
import {render} from 'react-dom'

export default class FbLoginBox extends React.Component{

	componentWillMount() {
		console.log("Hello World from login box")
	}
	render() {
		return (
				<div> Hello from Login Box  </div>
			)
	}

}