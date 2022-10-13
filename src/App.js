import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import PointCounter from './components/PointCounter';


function App() {
  //[varaiable,setterForVariable]
  
  const [cookies, setCookies] = useState(0);
  const [username, setUsername] = useState('');

 

  const addCookie = () => {
    setCookies(cookies + 1);
  }

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const appStyles = {
    backgroundColor: "cornSilk"
  };

  return (
    <div className="App" style={appStyles}>
     
      <img src={logo} className="App-logo" alt="logo" />
   
      <PointCounter />
      <PointCounter />
      <p>Cookies: {cookies}</p>
      <p>Username: {username}</p>
      
      <button onClick={addCookie}>Add One Cookie</button>
      <input value={username} onChange = {updateUsername}/>
      
    </div>
  );
}

export default App;
