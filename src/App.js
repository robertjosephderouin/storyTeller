//Apps.js

import React, { Component } from 'react';
import Prompts from './Prompts';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      prompts: [
        {id: 1, title: "Start", text:'This is the start of your journey'},
        {id: 2, title: "Middle", text:'This is the middle of your journey'},
        {id: 3, title: "End", text:'This is the end of your journey'},
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Story Teller</h1>
        <Prompts prompts={this.state.prompts} />
      </main>
    )
  }
}

export default App;
