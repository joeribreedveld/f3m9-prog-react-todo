// Imports
import "./Item.css"
import "../Todo/Todo.css"
import { render } from "@testing-library/react"
import React from "react"

// Functions
class Item extends React.Component {
	constructor(props) {
		super(props)
		this.className = "todo__item"
		this.state = { name: this.props.name, done: this.props.done }
	}

	onItemClick = () => {
		this.setState({ done: !this.state.done })
	}

	render() {
		if (this.state.done === true) {
			this.className = "todo__item todo__item--done"
		}
		if (this.state.done === false) {
			this.className = "todo__item"
		}

		return (
			<>
				<li key={this.state.name} onClick={this.onItemClick} className={this.className}>
					{this.state.name}
				</li>
			</>
		)
	}
}

// Exports
export default Item
