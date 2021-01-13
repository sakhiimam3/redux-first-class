import React, { useState, useEffect } from 'react'
import Router from './config/Router'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  // Initialize Firebase
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

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















 

