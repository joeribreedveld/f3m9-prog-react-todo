// Imports
import React from "react"
import "./Input.css"

// Functions
class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { inputValue: "" }
	}

	update = (e) => {
		this.setState({ inputValue: e.target.value }, console.log(this.state.inputValue))
	}

	enter = (e) => {
		if (e.keyCode === 13) {
			console.log("enter")
		}
	}

	render() {
		return (
			<>
				<input onChange={this.update} onKeyDown={this.enter} value={this.state.inputValue} className='input' type='text' placeholder='Boodschappen' />
			</>
		)
	}
}

// Exports
export default Input
