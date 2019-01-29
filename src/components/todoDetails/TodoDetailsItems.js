import React from 'react'

const TodoDetailsItems = ({items}) => {
  return (
    <ul className="collection">
        {items.length ? (
            items.map(item=> {
                return(
                    <a href="javascript:void()" className="collection-item">{item}</a>
                )
            })
        ):(
            <a href="javascript:void()" className="collection-item">No items in this to do</a>
        )}
    </ul>
  )
}

export default TodoDetailsItems
