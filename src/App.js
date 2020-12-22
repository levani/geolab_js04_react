// import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import ChangeTheme from './ChangeTheme';
import Tasks from './Tasks';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';
import './i18n';
import Counter from './Counter';
import CounterWithClass from './CounterWithClass';

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [currentUser, setCurrentUser] = useState(null); // -> {email: '', id: 123}

  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <div className="App">
          <header className={`App-header App-header-${currentTheme}`}>
            <Tasks />
            <ChangeTheme />
            {/* <Counter /> */}

            <CounterWithClass start={30} />
            <CounterWithClass start={50} />
          </header>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
