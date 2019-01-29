import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


const Card = ({todo, deleteTodo}) => {
  console.log(todo);
  return (
    <div className="card z-depth-2 sticky-action">
        <div className="card-content center-align">
            <h3 className="card-title activator grey-text text-darken-3">{todo.name}<i className="material-icons right">more_vert</i></h3>
            <h4 className="grey-text">{todo.content.length}</h4>
            <p className="grey-text">{moment(todo.createAt).calendar()}</p>
        </div>
        <div className="card-action">
          <Link to={`/todo/${todo.id}`} href="#">Show more</Link>
        </div>
        <div className="card-reveal">
          <button className="card-title btn-flat right"><i className="material-icons">close</i></button>
          <div className="clearfix"></div>
          <div className="center-align">
            <button onClick={()=> {deleteTodo(todo.id)}} className="btn btn-floating btn-large red waves-effect waves-light">
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Card
