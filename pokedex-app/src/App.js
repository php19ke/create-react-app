import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: {}
		};
	}

	render() {
		return (
			<div className="App" >
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		);
	}


}

export default App;
