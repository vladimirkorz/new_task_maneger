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
	const [inputText, setInputText] = useState("");

	//функция, котороя работает при нажатии на кнопку
	const addTodo = () => {
		if (inputText.trim() === "") return;

		//создаём новый обьект
		const newTodo = {
			id: Date.now(),
			text: inputText,
		};

		// добавляем его в список
		setTodos([...todos, newTodo]);

		//очищаем поле ввода
		setInputText("");
	};

	return (
		<>
			<Head />
			<Search />
			<Adding setInputText={setInputText} addTodo={addTodo}/>
			<List todos={todos} />
		</>
	);
}

export default App;
