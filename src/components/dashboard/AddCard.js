import React from 'react'
import {Link} from 'react-router-dom'

const AddCard = () => {
  return (
    <div className="card z-depth-2">
        <div className="card-content add-card center-align">
            <h3 className="card-title grey-text text-darken-3">Add</h3>
            <div className="center-align add-button">
                <Link className="btn btn-floating btn-large waves-effect waves-light" to="/add">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AddCard
