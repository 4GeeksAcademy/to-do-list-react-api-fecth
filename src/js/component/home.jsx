import React, { useState } from "react";



const Home = () => {
	let [newTask, setNewTask] = useState('');
	let [tasks, setTasks] = useState([]);

	let handleChange = (event) => {
		setNewTask(event.target.value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();

		if (newTask) {
			addTask(newTask);
			setNewTask(''); 
		}
	};

	let addTask = (newTask) => {
		setTasks([tasks, newTask]);
	};

	let deleteTask = (index) => {
		let newTasks = [tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	let showDeleteIcon = (index) => {
		// 
	};

	return (
		<div>
			<h1 text-secondary>To-Do List</h1>
			<form class="form-floating" onSubmit={handleSubmit}>
				<input class="form-control" type="text" id="floatingInputValue" placeholder="Add task" value={newTask} onChange={handleChange}/>
				<label for="floatingInputValue">No tasks, add tasck...</label>
			</form>
			{tasks.length > 0 ? (
				<ul>
					{tasks.map((task, index) => (
						<li key={index} onMouseEnter={() => showDeleteIcon(index)}>
							{task}
							{showDeleteIcon(index) && (
								<span onClick={() => deleteTask(index)}>️</span>
							)}
						</li>
					))}
				</ul>
			) : ("")}
		</div>
	);
}


export default Home;
