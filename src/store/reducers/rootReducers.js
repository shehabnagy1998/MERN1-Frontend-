const initState = {
    todos: [
        
    ]
};

const rootReducers = (state=initState, action)=> {
    switch(action.type) {

        case 'FETCH_DATA': 
            state = {
                todos: action.todos
            }; 
            console.log(state.todos.length);
            return state;
        
        case 'FETCH_DATA_ERROR': 
            console.log('error in fetching data');
            return state;

        case 'ADD_TODO': 
            state = {
                ...state,
                todos: [...state.todos, action.todo]
            }; 
            console.log(state.todos.length);
            return state;
        
        case 'ADD_TODO_ERROR': 
            console.log('error in inserting');
            return state;

        case 'DELETE_TODO': 
            let newTodo = state.todos.filter(todo=> todo.id != action.id);
            console.log(newTodo);
            state = {
                ...state,
                todos: newTodo
            };
            console.log('delete todo with id ' + action.id);
            return state;

        case 'DELETE_TODO_ERROR':
            console.log('error in deleting');
            return state;

        default: 
            return state;

    }
}

export default rootReducers