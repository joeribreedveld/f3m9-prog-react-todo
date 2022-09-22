// Imports
import "./Item.css"
import "../Todo/Todo.css"

// Functions
const Item = (props) => {
	const todoClick = () => {
		console.log("test")
	}

	let className = "todo__item"
	if (props.done === true) {
		className = "todo__item todo__item--done"
	}

	return (
		<>
			<li key={props.name} onClick={todoClick} className={className}>
				{props.name}
			</li>
		</>
	)
}

// Exports
export default Item
