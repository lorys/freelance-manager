import React from 'react';
import logo from './logo.svg';
import './App.css';
const { ipcRenderer, remote } = window.require('electron');
const fs = remote.require("fs");

function App() {
  return (
    <div></div>
  );
}

export default App;
