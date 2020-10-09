import React,{ useState } from 'react';
import './App.css';
import Home from './components/Home';

const { ipcRenderer, remote } = window.require('electron');
const fs = remote.require("fs");


function App() {
  const [ screen, setScreen ] = useState("home");
  
  const screens = new Array();
  screens['home'] = <Home navigate={setScreen} currentScreen={screen}/>

  return (screens[screen]);
}

export default App;
