import React, { Component } from 'react'
import $ from 'jquery'
import M from 'materialize-css'
import {connect} from 'react-redux'
import {AddTodo} from '../../store/actions/todos'
import uuidv1 from 'uuid/v1'

class Add extends Component {

    state = {
        name: '',
        content: [],
        done: false
    };

    componentDidMount() {
        M.Chips.init($('.chips-placeholder'), {
            placeholder: 'items of todo',
        })
        this.setState({
            content: M.Chips.getInstance($('.chips-placeholder')).chipsData
        })
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        let newContent = [];
        this.state.content.map(res=> {
            newContent.push(res.tag);
        })
        let todo = {
            id: uuidv1(),
            name: this.state.name,
            content: newContent,
            createAt: new Date()
        }
        this.props.addTodo(todo);
        this.props.history.push('/')
    }

  render() {
    return (
      <div className="container section">
          <div className="card z-depth-2">
              <div className="card-content add">
                  <h1 className="card-title">Add ToDo</h1>
                  <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input type="text" id="name" onChange={this.handleChange}/>
                            <label htmlFor="name">Name of todo</label>
                        </div>
                        <div className="chips chips-placeholder"></div>  
                        <div className="center-align">
                            <button type="submit" className="btn add-btn">{this.state.done ? <i className="material-icons">done</i> : 'Add'}</button>
                        </div>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        length: state.todos.length
    }
}

const mapDispatchToProps = (disptach)=> {
    return {
        addTodo: (todo)=> {disptach(AddTodo(todo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
