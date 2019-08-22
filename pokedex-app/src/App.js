import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const pokemon = require('pokemon');

class App extends Component {
	constructor() {
		super();
		this.state = {
			loaded: false,
			pokemons: []
		};

		this.fetchData = this.fetchData.bind(this);
	}

	fetchData() {
		this.setState({
			pokemons: pokemon.all(),
			loaded: true
		});
	}

	render() {
		return (
			<div className="App" >
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={this.fetchData}>Fetch</button>
				{
					this.state.loaded ?
						this.state.pokemons.map((pokemon, index) => {
							return <div key={index}>{pokemon}</div>
						}) :
						<div>Nothing loaded yet</div>
				}
			</div>
		);
	}


}

export default App;
