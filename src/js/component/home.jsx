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
			setTasks([...tasks, newTask]);
			setNewTask('');
		}
	};

	let deleteTask = (index) => {
		let newTasks = [];
		newTasks = tasks.filter((item, id) => {
			if (index != id) {
				return item
			}
		}
		)
		setTasks(newTasks)
	};


	return (
		<div className="conatiner-fluid p-4 mx-3 row g-3">
			
			<div class="col-sm-7 m-auto">
				<h1 className="text-center text-secondary text-opacity-75 fw-bolder">To Do List</h1>
				<form className="form-floating" onSubmit={handleSubmit}>
					<input className="form-control" type="text" id="floatingInputValue" placeholder="Add task" value={newTask} onChange={handleChange} />
					<label htmlFor="floatingInputValue" className="text-secondary">No tasks, add task...</label>
				</form>
				{tasks.length > 0 ? (
					<ul className="list-group">
						{tasks.map((task, index) => (
							<li className="list-group-item item-li fw-semibold text-center" key={index}>
								{task}

								<button type="button" className="btn-close float-end" aria-label="Close" onClick={() => deleteTask(index)}>️</button>
							</li>
						))}
					</ul>
				) : ("")}
				<p className="fst-italic font-monospace p-1 fs-6 text-secondary">To do tasks: {tasks.length}</p>
			</div>
		</div>
	);
}


export default Home;
