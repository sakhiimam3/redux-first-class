import React from "react"
 const Home = (props) =>{
  const gotosignup=()=>{
               props.history.push('/SignUp')
  }
   return(
       
           <div >
             
                     <button onClick={gotosignup}>Go to sign up</button>
              </div>
   )
 };
    export default Home;