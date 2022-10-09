import './App.css';
import React,{useState} from 'react';
import Form from './components/Form';
import Listitem from './components/Listitem';

function App() {
const [todo,setTodo] = useState({id:'',title:'',isDone:''});

const [allTodos,setAllTodos] = useState([]);
// const [isDone,setIsDone] = useState(false);
// console.log(todo)
const submitHandler = (e)=>{
    e.preventDefault()

    if(todo.title){

      setAllTodos((prev)=>{
        return [...prev,todo]
      })
      setTodo((prev)=>{
        return {...prev,title:""}
      })
      
    }
}

const deleteHandler = (todoID)=>{
   setAllTodos((prev)=>{
    return prev.filter((todo,idx)=>{
      return todoID !== todo.id;
    })
   })
}

const completeHandler = (todoid)=>{
   let tempTodos = [...allTodos];
   let todo = tempTodos.find((todo)=>{
    return todo.id === todoid;
  })
  
  todo.isDone=true;
  setAllTodos(tempTodos)
  // console.log(todo)
}

  return (
    <div className="App --flex-center --100vh --bg-primary">

      <div className='--dir-column --card'>
      <Form 
        onSubmit={submitHandler} 
        title={todo.title} 
        onChange={(e)=>{
          setTodo({id:Math.random(),title:e.target.value,isDone:false})
        }}
        
      />
        
        {
          allTodos.length !== 0?(
            <ul className='--bg-white --p --w100'>
            {
              allTodos.map((todo,idx)=>{
                return(
                  <Listitem
                   key={todo.id} 
                   todo={todo} 
                   onComplete={completeHandler} 
                   onDelete={deleteHandler} 
                   />
                )
              })
            }  
          </ul>
          ):null
        }
       
      </div>
      
    </div>
  );
}

export default App;
