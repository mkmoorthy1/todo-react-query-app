import { Fragment } from 'react';
import { useFetchTodos,useDeleteTodo,useUpdateTodo } from './hooks/UseTodoData';
import { FaTrash } from 'react-icons/fa';
import { BiCheckCircle } from 'react-icons/bi';
const TodoList = () => {
	const onSuccess = data => {
		console.log('Perform Side effect After Successful Fetching ');
	};

	const onError = error => {
		console.log('Perform Side effect After Error ');
	};

    const {mutate:delTodo}=useDeleteTodo();

    const {mutate:toggleComplete}=useUpdateTodo()
    

    const deleteTodo=(todo)=>{
        //console.log(todo.id)
        delTodo({id:todo.id})
    }

    const updateTodo=(todo)=>{
        toggleComplete({id:todo.id,completed:!todo.completed})
    }

  //  const {mutate:delTodo}=

    

	const { isLoading, data, isError, error } = useFetchTodos(onSuccess, onError);

	//const sortedData = data & data.sort((a, b) => b.id - a.id)
	//console.log(data)

	if (isLoading) {
		return <h2>Loading</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}

	return (
		<Fragment>
			<ul className="todo-box">
				{data.map(todo => (
					<li key={todo.id}>
						<p className={`${todo.completed ? 'done':''}`}>
							{todo.title}
							<span className="buttonContainer">
								<BiCheckCircle className="btn" onClick={()=>updateTodo(todo)} />
								<FaTrash className="btn" onClick={()=>deleteTodo(todo)} />
							</span>
						</p>
					</li>
				))}
			</ul>
		</Fragment>
	);
};

export default TodoList;
