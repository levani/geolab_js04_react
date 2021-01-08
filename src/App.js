// import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import UserContext from './UserContext';
import './i18n';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Home from './screens/Home';
import Blog from './screens/Blog';

function App() {
  const [currentUser, setCurrentUser] = useState(null); // -> {email: '', id: 123}

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
