// Imports
import "./Todo.css"

// Functions
const Todo = () => {
	return (
		<>
			<article className='todo'>
				<header className='todo__header'>
					<h1 className='todo__h1'>Things to do:</h1>
				</header>
				<ul className='todo__list'>
					<li className='todo__item'>Groceries</li>
					<li className='todo__item'>Studying</li>
					<li className='todo__item'>Walk the dog</li>
					<li className='todo__item'>Text girlfriend</li>
					<li className='todo__item'>Code awesome stuff</li>
				</ul>
			</article>
		</>
	)
}

// Exports
export default Todo
