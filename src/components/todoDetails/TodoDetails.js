import React from 'react'
import TodoDetailsItems from './TodoDetailsItems';
import {connect} from 'react-redux'

const TodoDetails = ({todo}) => {
    console.log(todo)
  return (
    <div className="section container">
        <div className="row">
            <div className="card z-depth-2">
                {todo ? (
                    <div className="card-content todo-details">
                        <h1 className="card-title">{todo.name}</h1>
                        <TodoDetailsItems items={todo.content}/>
                    </div>
                ):(
                    <div className="card-content todo-details">
                        <h1 className="card-title">not available</h1>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps)=> {
    let id = ownProps.match.params.id;
    return {
        todo: state.todos.find(todo=> todo.id == id)
    }
}

export default connect(mapStateToProps)(TodoDetails)
