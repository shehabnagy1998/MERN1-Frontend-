import React, { Component } from 'react'
import $ from 'jquery'
import M from 'materialize-css'
import Card from './Card'
import AddCard from './AddCard'
import EmptyCard from './EmptyCard'
import {connect} from 'react-redux'
import {DeleteTodo, FetchTodo} from '../../store/actions/todos' 

class Dashboard extends Component {

    componentDidMount() {
        M.AutoInit();
        this.props.fetchTodo();
    }

    render() {
        let todos = this.props.todos;
        let deleteTodo = this.props.deleteTodo;
        return (
          <div className="section container">
            <div className="row">
                {
                    todos.length >= 1 ? (
                        todos.map(todo=> {
                            return(
                                <div className="col s12 m4" key={todo.id}>
                                    < Card todo={todo} deleteTodo={deleteTodo}/>
                                </div>
                            )
                        })
                    ):(
                        <div className="col s12 m4">
                            <EmptyCard />
                        </div>
                    )
                }
                <div className="col s12 m4">
                    <AddCard />
                </div>
            </div>
          </div>
        )
      }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        deleteTodo: (id)=> {dispatch(DeleteTodo(id))},
        fetchTodo: ()=> {dispatch(FetchTodo())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
