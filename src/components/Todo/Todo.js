// Imports
import "./Todo.css"
import Item from "../Item/Item"
import React from "react"
import tasksObject from "../../data/tasks"
import Input from "../Input/Input"

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

	componentDidUpdate() {}

	render() {
		const items = this.state.tasks.map((task) => {
			return (
				<>
					<Item name={task.name} key={task.id} />
				</>
			)
		})

		return (
			<>
				<article className='todo'>
					<header className='todo__header'>
						<h1 className='todo__h1'>Things to do</h1>
					</header>
					<ul className='todo__list'>{items}</ul>
					<Input />
				</article>
			</>
		)
	}
}

// Exports
export default Todo
