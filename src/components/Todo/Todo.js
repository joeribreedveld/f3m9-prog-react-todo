// Imports
import "./Todo.css"
import Item from "../Item/Item"
import React from "react"
import tasksObject from "../../data/tasks"

// Functions
class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
		}
	}

	componentDidMount() {
		this.setState({
			tasks: tasksObject.tasks,
		})
	}

	componentDidUpdate() {
		let listItems = this.state.tasks.map((task) => {
			return <p>Test</p>
		})
	}

	render() {
		return (
			<>
				<article className='todo'>
					<header className='todo__header'>
						<h1 className='todo__h1'>Things to do</h1>
					</header>
					{/* <ul className='todo__list'>{this.listItems}</ul> */}
				</article>
			</>
		)
	}
}

// Exports
export default Todo
