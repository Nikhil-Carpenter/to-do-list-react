import React from 'react'

const Listitem = ({todo,onComplete,onDelete}) => {
  return (
    <li key={todo.id} className='--text-base --flex-between --mb --d-flex'>
                  <p className={todo.isDone?"--mr-auto isdone":"--mr-auto"}>{todo.title}</p>
                  <button onClick={onComplete.bind(null,todo.id)} className='--btn  --btn-success'>done</button>
                  <button onClick={onDelete.bind(null,todo.id)} className='--btn --ml --btn-danger'>delete</button>
                </li>
  )
}

export default Listitem;