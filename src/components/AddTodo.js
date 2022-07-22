import { useState } from 'react';
import { useAddTodo } from './hooks/UseTodoData';
const AddTodo = () => {
	const [ todo, setTodo ] = useState('');

    const {mutate:addTodo}=useAddTodo();

    


	const handleAddTodo = event => {
		event.preventDefault();
        addTodo({title:todo,completed:false})
        setTodo('')
	};


    


	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input
					type="text"
					className="todo-input"
					value={todo}
					onChange={event => setTodo(event.target.value)}
				/>
				<button className="todo-button">Add Todo</button>
			</form>
		</div>
	);
};

export default AddTodo;
