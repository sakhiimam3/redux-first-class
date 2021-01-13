import React from "react";
import {
  BrowserRouter,
  Route,

} from "react-router-dom";

import Home from '../screen/Home'
import About from "../screen/About"
import login from '../screen/login'
import signUp from '../screen/signUp'
import Chat from '../screen/Chat'

function Navigation() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/signUp" component={signUp} />
      <Route exact path="/login" component={login} />
      <Route exact path="/Chat" component={Chat} />
      <Route exact path="/About" component={About} />
    </BrowserRouter>
  )
}

export default Navigation;

  