import React, { Component } from 'react'
import './App.css';
import Login from './components/Login'
import Admin from './components/Admin'
import Member from './components/Member'
import Err from './components/Error'
import Logout from './components/Logout'
import axios from 'axios'

import {BrowserRouter,Switch,Route}from 'react-router-dom'


class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
         
          <div className='app'>
            <div className='app'>
              <Switch>
               
                <Route exact path='/' component={Login}/>
                <Route exact path='/admin' component={Admin}/>
                <Route exact path='/Member' component={Member}/>
                <Route exact path='/logout' component={Logout}/>
                <Route component={Err}/>
          
              </Switch>
            </div>
          </div>
       
      </BrowserRouter>
    );

  }
  
}

export default App;
