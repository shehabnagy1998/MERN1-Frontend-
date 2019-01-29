import axios from 'axios';

const hostname = window.location.hostname == "localhost" ? window.location.hostname : "192.168.1.6";
const port = 8080;
const url = `http://${hostname}:${port}/api`;

export const DeleteTodo = (id)=> {
    return (dispatch, getState)=> {
        axios.delete(`${url}/todo/${id}`).then(res=> {
            dispatch({type: "DELETE_TODO", id: id});
        }).catch(err=>{
            dispatch({type: "DELETE_TODO_ERROR", err: err});
        })
    }
}

export const AddTodo = (todo)=> {
    return (dispatch, getState)=> {
        axios.post(`${url}/todos`, todo).then(res=> {
            dispatch({type: "ADD_TODO", todo: todo});
        }).catch(err=> {
            dispatch({type: "ADD_TODO_ERROR", err: err});
        })
    }
}

export const FetchTodo = ()=> {
    return (dispatch, getState)=> {
        axios.get(`${url}/todos`).then(res=> {
            dispatch({type: "FETCH_DATA", todos: res.data});
        }).catch(err=> {
            dispatch({type: "FETCH_DATA_ERROR", err: err});
        })
    }
}