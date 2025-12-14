import { useState } from "react";
import Head from "./components/Head.jsx";
import Search from "./components/Search.jsx";
import Adding from "./components/Adding.jsx";
import List from "./components/List.jsx";
import "./App.css";

function App() {
	//todo - надо сделать to do
	//создание "коробку" для списка дел
	const [todos, setTodos] = useState([]);

	//создание коробки для текста который вводит пользователь

	//функция, котороя работает при нажатии на кнопку
	const addTodo = (todo) => {
		if (todo.inputText.trim() === "") return;

		//создаём новый обьект
		const newTodo = {
			id: Date.now(),
			text: todo.inputText,
			date: todo.date,
			tags: todo.tags.split(" "),
		};

		// добавляем его в список
		setTodos([...todos, newTodo]);
	};
	const removeTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<>
			<Head />
			<Search />
			<Adding addTodo={addTodo} />
			<List todos={todos} removeTodo={removeTodo} />
		</>
	);
}

export default App;
