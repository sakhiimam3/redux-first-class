import React, { useEffect, useState } from 'react'
import './App.css';
import   { connect } from "react-redux"
import { set_data } from "../src/store/action"



function App(props) {
  const [todo, setTodo] = useState('')
  const [allTodos, setAllTodos] = useState([])
  const [edit, setEdit] = useState(false)



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
               <button onClick={()=>props.set_data()}>check state</button>          
        <input type={'text'} value={todo}
          placeholder={'Enter Todo'}
          onChange={(e) => setTodo(e.target.value)} />
        <button onClick={submitTodo}>Add Item </button>
      </div>
      <div>
        {
          allTodos.map((todo, index) => {
            return (
              <div> {edit ? <input value={todo} /> : <span> {todo} </span>}
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

  const mapStateToProps=(state)=> {
   return (   
  {
      name:state.name,
      email:"sakhidad@gmail.com"
      
  }

   )

}


  const mapDispatchToProp=(dispatch)=>({
       set_data:() =>set_data()

       
  })

export default  connect(mapStateToProps,mapDispatchToProp) (App);



// import About from "./screen/About"
// import Home from "./screen/Home"
// import Error from "./screen/Error"
// import {Route,Switch } from "react-router-dom" 
// import Navbar from "./component/Navbar.js"

   
   



//   function App(){
           


//         return(





//               <>

//                  <Switch>
//                    <Route  exact  path="/"   component={Home}/>
//                    <Route  path="/about"  component={About}/>
//                    <Route   component={Error}/>
                   


//                      </Switch>
                 
                
//               </>

//         )
//   }





// export default  App;






//  class App extends Component{
//      constructor(){
//          super()
//          this.state={
//             todos:["baba","abid","karachi"],
//             value:""
//          }
         
//      }
//       add_item=()=>{
//          this.state.todos.push(this.state.value)
//           this.setState({
//              todos:this.state.todos,
//              value:""
//           })
//       }

//        delete_todo=(index)=>{
//            this.state.todos.splice(index,1)
//            this.setState(({
//                todos:this.state.todos
//            }))
//        }
//         render(){
//            let{todos,value}= this.state;
//             return(
//                 <div>
//                      <input type="text"  value={value} onChange={(e)=>this.setState({value:e.target.value})}               placeholder="enter todos"/>
//                      <button onClick={this.add_item}>Add item </button>
//                    <ul>
//                    {todos.map((v,i)=>{
//                     return( <li key={i}>{v}
//                      <button  onClick={()=>this.delete_todo(i)}>Delete </button>
//                      </li>)
//                    })}
//                   </ul>
//                 </div>
//             )
//         }
//  }


// export default App;








































// function App(){





  
//    return(
//           <div className="App">
//             <input className="" type="text"/>
//             <button id="clean"   onclick="clearRes()" class="clear">C</button><br />

         
//      <button class="btn"  onclick="getNum('7')">7</button>
//      <button class="btn"  onclick="getNum('8')">8</button>
//      <button class="btn" onclick="getNum('9')" >9</button>
//      <button class="btn" onclick="getNum('x')">x</button>
//      <br />
//       <button class="btn" onclick="getNum('4')">4</button>
//       <button class="btn"onclick="getNum('5')">5</button>
//       <button class="btn" onclick="getNum('6')">6</button>
//       <button class="btn" onclick="getNum('-')">-</button>
//       <br />
               
//       <button class="btn" onclick="getNum('1')">1</button>
//       <button class="btn" onclick="getNum('2')">2</button>
//       <button class="btn" onclick="getNum('3')">3</button>
//       <button class="btn" onclick="getNum('+')">+</button>
//       <br />
                      
//        <button class="bottom" onclick="getNum('0')">0</button>
//        <button class="bottom" onclick="abc()">=</button>
                           
                
                 
// </div>


  

//    )



// }



// export default App;















 

