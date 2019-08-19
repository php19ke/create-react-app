import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinLogo: true,
      cards: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]
    }

    this.toggleSpin = this.toggleSpin.bind(this);
  }

  toggleSpin(e) {
    this.setState(prevState => ({
      spinLogo: !prevState.spinLogo
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
              src={logo} 
              className={this.state.spinLogo ? "App-logo" : "Static-app-logo"} 
              alt="logo"
              onClick={this.toggleSpin}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="grid">
          {
            this.state.cards.map(card => (
              <Card id={card.id} duration={150}></Card>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
