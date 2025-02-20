import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Button } from 'reactstrap';
import Login from './components/Login'
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import Success from './components/Success'
import Error from './components/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route path="/error"><Error/></Route>
          <Route path="/success"><Success/></Route> 
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
