import addTodo from "../App.jsx";

export default function List({ todos, removeTodo }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<p>{todo.text}</p>
					<p>{todo.date}</p>
					<p className="tags">
						{todo.tags.map((tag, i) => {
							return <span key={i}>{tag}</span>;
						})}
					</p>
					<button onClick={() => removeTodo(todo.id)}> remove</button>
				</li>
			))}
		</ul>
	);
}
