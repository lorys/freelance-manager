import React,{ useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './screen/Home';
import Devis from './screen/Devis';

const { ipcRenderer, remote } = window.require('electron');
const fs = remote.require("fs");

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(styleLink);

function App() {
  const [ screen, setScreen ] = useState("home");
  
  const screens = new Array();
  screens['home'] = <Home navigate={setScreen}/>;
  screens['devis'] = <Devis navigate={setScreen}/>;

  const Screen = () => screens[screen];
  return (
    <React.Fragment>
      <Menu navigate={setScreen}/>
      <Screen />
    </React.Fragment>
  );
}

export default App;
