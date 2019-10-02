import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Login from './login'
import hotels from './hotelList'
import cities from './cityList'
import SearchResto from './searchResto'
import {ProtectedRoute} from './protectedRoute'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/collections' component={hotels}/>
        <ProtectedRoute path='/cities' component={cities}/>
        <ProtectedRoute path='/search' component={SearchResto}/>
        </Switch>
       </header>
    </div>
  );
}

export default App;
