import { Dispatch } from "redux"
import axios from "axios"
import { TodoAction, TodoActionTypes } from "../../types/todo"



export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {_page: page, _limit: limit}
            })
            dispatch( {type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type:  TodoActionTypes.FETCH_TODO_ERROR, payload: "Произошла ошибка при загрузке списка дел"})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}