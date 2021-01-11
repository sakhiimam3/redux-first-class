import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  './index.css'
import Logo  from '../images/img.jpg'
 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" className="input" label="calculate" variant="outlined" />
    </form>
  );
}

 class Baba extends React.Component{
     render(){
          
          return(
                <div>
                      {/* <h1> {this.props.name} {this.props.price} </h1> */}
                         <button> {this.props.name} </button>

                    {/* <img src={Logo}  alt=""/> */}
                     {/* {this.props.page} */}
                    {/* <button onClick={()=>this.props.get_props("saylani")}>send props </button> */}
                     </div>
                        
          )
     }
 }

  

export{
   BasicTextFields ,
   Baba
}
