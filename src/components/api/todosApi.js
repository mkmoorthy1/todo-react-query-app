import axios from "axios";

const todosApi = axios.create({
    baseURL:"http://localhost:4000"
})

export const getTodos=async()=>{
    const response= await todosApi.get('/todos');
    return response.data
}
export const addTodoApi=async(todo)=>{
    return await todosApi.post('/todos',todo)
}

export const deleteTodoApi=async({id})=>{
   
    return await todosApi.delete(`/todos/${id}`, id)
}

export const updateTodoApi=async(todo)=>{
   
    return await todosApi.patch(`/todos/${todo.id}`, todo)
}