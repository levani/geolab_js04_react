// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import UserContext from './UserContext';
import './i18n';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Blog from './screens/Blog';

const token = localStorage.getItem('token');

function App() {
  const [currentUser, setCurrentUser] = useState({
    token
  });

  return (
    <Router>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>

      <div className="container">
        <Blog />
      </div>

      </UserContext.Provider>
    </Router>
  );
}

export default App;
