import React from 'react'

const Form = ({onSubmit,title,onChange}) => {
  return (
    <form onSubmit={onSubmit} className='--flex-center --bg-grey --p2 --dir-column --form-control'>
          <div className='--w100'>
            <input value={title} onChange={onChange} className="--w100" type="text" placeholder='Enter A Task'/>
          </div>
          <div className='--w100'>
            <button type='submit' className='--btn --btn-primary --btn-block --btn-lg'>Enter</button>
          </div>
        </form>
  )
}

export default Form