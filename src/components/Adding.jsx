export default function Adding({ setInputText, addTodo }) {
	return (
		<>
			<input
				type="text"
				onChange={(e) => setInputText(e.target.value)}
				placeholder="новая задача"
			/>

			<input type="text" placeholder="тег" />

			<input type="date" placeholder="дата" />

			<button onClick={addTodo}>добавить</button>
		</>
	);
}
