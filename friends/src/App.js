import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from "./components/FriendForm";
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components'

const UList = styled.ul `
display: flex;
margin-left: 35%;
list-style: none;
border-bottom: 2px grey solid;
width: 300px;


`;



function App() {
  return (
    <Router >
      <div  className="App">
        <UList>
          <li>
            <Link style = {{color:'red', textDecoration:'none'}} to="/login">Login</Link>
          </li>
          <li>
            <Link style = {{color:'red', textDecoration:'none'}} to="/protected">Friends Page</Link>
          </li>
          <li>
            <Link style = {{color:'red', textDecoration:'none'}} to="/form">Add Friend</Link>
          </li>
        </UList>
        <Route   path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path= "/form" component = {FriendForm}/>
      </div>
    </Router>
  );
}

export default App;
