import React,{ useState } from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const { ipcRenderer, remote } = window.require('electron');
const fs = remote.require("fs");

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(styleLink);

class MyEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = editorState => this.setState({editorState});
    }
  
    render() {
      return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      );
    }
  }

function Devis() {
  return (
    <React.Fragment>
        <MyEditor/>
    </React.Fragment>
  );
}

export default Devis;
