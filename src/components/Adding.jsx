import { useState } from "react";

export default function Adding({ addTodo }) {
	const [inputText, setInputText] = useState("");
	const [date, setDate] = useState("");
	const [tags, setTag] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ inputText, date, tags });

		setInputText("");
		setDate("");
		setTag("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => setInputText(e.target.value)}
				value={inputText}
				placeholder="новая задача"
			/>

			<input
				type="text"
				placeholder="тег"
				onChange={(e) => setTag(e.target.value)}
				value={tags}
			/>

			<input
				type="date"
				placeholder="дата"
				onChange={(e) => setDate(e.target.value)}
				value={date}
			/>

			<button type="submit">добавить</button>
		</form>
	);
}
