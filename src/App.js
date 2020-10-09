import React,{ useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';

const { ipcRenderer, remote } = window.require('electron');
const fs = remote.require("fs");


function App() {
  const [ screen, setScreen ] = useState("home");
  
  const screens = new Array();
  screens['home'] = <Home />

  const Screen = () => screens[screen];
  return (
    <React.Fragment>
      <Menu navigate={setScreen}/>
      <Screen />
    </React.Fragment>
  );
}

export default App;
