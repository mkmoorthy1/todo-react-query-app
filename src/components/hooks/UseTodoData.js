import {useQuery,useMutation,useQueryClient} from "react-query"
import { getTodos,addTodoApi,deleteTodoApi,updateTodoApi } from "../api/todosApi"

export const useAddTodo=()=>{
      const queryClient= useQueryClient();
      return useMutation(addTodoApi,{
        onSuccess:()=>{
            queryClient.invalidateQueries('todos')
        }
      })
}

export const useDeleteTodo=()=>{
  const queryClient= useQueryClient();
  
  return useMutation(deleteTodoApi,{
    onSuccess:()=>{
        queryClient.invalidateQueries('todos')
    }
  })
}

export const useUpdateTodo=()=>{
  const queryClient= useQueryClient();
  
  return useMutation(updateTodoApi,{
    onSuccess:()=>{
        queryClient.invalidateQueries('todos')
    }
  })
}

export const useFetchTodos=(onSuccess,onFailure)=>{
    return useQuery('todos',getTodos,{
            select:data=>data.sort((a,b)=>b.id-a.id),
            enabled:true,
            onSuccess,
            onFailure
    })
}

