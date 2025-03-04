import React, { useState } from "react";
import "../../styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [value, setValue] = useState("");
	const [tasks, setTasks] = useState([]);
	return (
		<div>
			<div className="container">
				<div className="input-group flex-nowrap">
					<input type="text" className="form-control" placeholder="Write your task" aria-label="Task"

						onChange={(event) => {
							setValue(event.target.value);
						}}
						value={value}
						onKeyDown={(event) => {
							if (event.key == "Enter") {
								console.log("Tarea agregada:", value);
								setTasks([...tasks, value]);
								setValue("");
							}
						}}
					/>
				</div>
				<ul className="list-group">
					{tasks.map((item, index) => (
						<li className="list-group-item" key={index}>
							{item}
							<i onClick={() => {
								const updateTodos = tasks.filter((_, currentIndex) => index != currentIndex);
								setTasks(updateTodos)
							}} className="fa-solid fa-trash icon"></i>
						</li>))}
				</ul>
				<div className="counter">
					{tasks.length} tasks pendings
				</div>
			</div>
		</div>
	);
};

export default Home;