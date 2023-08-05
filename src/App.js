import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

export const Context = React.createContext();

function App() {

  const [onOff, setOnOff] = useState(false);

  return (
    <Context.Provider value={[onOff, setOnOff]}>
      <div className="App">
        <NavBar></NavBar>
        <h1>{onOff? "Turn On": "Turn Off"}</h1>
      </div>
    </Context.Provider>    
  );
}

export default App;
