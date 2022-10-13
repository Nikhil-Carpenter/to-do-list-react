import React from 'react'

const Listitem = ({todo,onComplete,onDelete}) => {
  return (
    <li key={todo.id} className={todo.isDone?'--text-base --rd-4 add-opacity --p --flex-between --mb --d-flex':'--text-base  --flex-between --mb --d-flex --rd-4 --p'}>
      <p className={todo.isDone?"--mr-auto --w100 isdone":"--w100 --pr --mr-auto"}>{todo.title}</p>
      <button onClick={onComplete.bind(null,todo.id)} className='--btn  --btn-success'>done</button>
      <button onClick={onDelete.bind(null,todo.id)} className='--btn --ml --btn-danger'>delete</button>
    </li>
  )
}

export default Listitem;