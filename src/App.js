import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPrompt: 0,
      prompts: [
        {id: 0, title: "Start", text:'This is the start of your journey', nextPrompt:[{next: 1, text: "Continue"}]},
        {id: 1, title: "Middle", text:'This is the middle of your journey', next:[2, 2, 2 ,2]},
        {id: 2, title: "End", text:'This is the end of your journey', next:[0, 0, 0, 0]},
      ],
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Story Teller</h1>
          <div className="content">
              <Card
                title = {this.state.prompts[this.state.currentPrompt].title}
                text = {this.state.prompts[this.state.currentPrompt].text}
              ></Card>
          </div>
          {/* <div className="buttons">
            <button
              onClick={() =>
                this.setState({
                  //Function goes here.
                })
              }
            >
            {this.state.prompts[this.state.currentPrompt].next[0].text}
            </button>
          </div> */}
      </main>
    )
  }
}

export default App;
