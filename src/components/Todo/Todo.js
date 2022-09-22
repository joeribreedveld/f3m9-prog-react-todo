// Imports
import "./Todo.css"

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

	let listItems = tasks.map((task) => {
		if (task.done === true) {
			return (
				<>
					<li className='todo__item todo__item--done'>{task.name}</li>
				</>
			)
		}

		return (
			<>
				<li className='todo__item'>{task.name}</li>
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
