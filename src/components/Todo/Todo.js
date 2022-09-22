// Imports
import "./Todo.css"
import Item from "../Item/Item"

// Functions
const Todo = () => {
	const tasks = [
		{
			name: "Groceries",
			done: false,
		},
		{
			name: "Walking the dog",
			done: false,
		},
		{
			name: "Cooking dinner",
			done: true,
		},
		{
			name: "Doing homework",
			done: false,
		},
		{
			name: "Eating leftovers",
			done: false,
		},
		{
			name: "Message friends",
			done: false,
		},
	]

	const listItems = tasks.map((task) => {
		return (
			<>
				<Item name={task.name} done={task.done} />
			</>
		)
	})

	return (
		<>
			<article className='todo'>
				<header className='todo__header'>
					<h1 className='todo__h1'>Things to do</h1>
				</header>
				<ul className='todo__list'>{listItems}</ul>
			</article>
		</>
	)
}

// Exports
export default Todo
