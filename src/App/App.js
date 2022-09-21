// Imports
import "./App.css"
import Todo from "../components/Todo/Todo"

// Functions
const App = () => {
	const tasks = ["Groceries", "Walking the dog", "Studying", "Message girlfriend", "Code awesome stuff"]

	return (
		<>
			<Todo tasks={tasks} />
		</>
	)
}

// Exports
export default App
