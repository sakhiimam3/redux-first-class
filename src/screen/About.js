import React, { useEffect, useState } from 'react'
import '../../src/App.css';



function About(props) {
  const [todo, setTodo] = useState('')
  const [allTodos, setAllTodos] = useState([])
  const [edit, setEdit] = useState(false)

const gotoCHAT=()=>{
       props.history.push("./Chat")
}

  const submitTodo = () => {
    if (todo === '') {
      alert('Please enter some thing')
    } else {
      setAllTodos([todo, ...allTodos])
      setTodo('')
        
    }
  }

  const deleteTodo = (index) => {
    let arr = allTodos
    arr.splice(index, 1)
    setAllTodos([...arr])
  }

  const editTodo = (todo, index) => {
    setEdit(true);
    // var updatedTodo = prompt('Todo', todo)
    // let arr = allTodos
    // arr[index] = updatedTodo
    // setAllTodos([...arr])
  }

  

  return (
    
        
    <div className="App">
      
      <div>
                       
        <input type={'text'} value={todo}
          placeholder={'Enter Todo'}
          onChange={(e) => setTodo(e.target.value)} />
        <button onClick={submitTodo}>Add Item </button>
      </div>
      <div>
        {
          allTodos.map((todo, index) => {
            return (
              <div> {edit ? <input value={todo} /> : <span> {todo} </span> } <button onClick={gotoCHAT}> Chat </button>
                {
                  edit ?
                    <button  title={"Save"} >Save</button>
                    :
                    <button onClick={() => editTodo(todo, index)} >Edit </button>
                }
                <button onClick={() => deleteTodo(index)} >Delete </button>
              </div>
            )
          })
        }
      </div>
                
    </div>
  );
}

  export default About;