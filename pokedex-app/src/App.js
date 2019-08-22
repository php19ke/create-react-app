import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

// https://github.com/sindresorhus/pokemon
const pokemon = require('pokemon');

class App extends Component {
	constructor() {
		super();
		this.state = {
			loaded: false,
			pokemons: [],
			details: [],
			activeNow: null
		};

		this.fetchData = this.fetchData.bind(this);
		this.fetchDetails = this.fetchDetails.bind(this);
	}

	fetchData() {
		this.setState({
			pokemons: pokemon.all(), // return array of strings that contain pokemon names 
			loaded: true
		});
	}

	fetchDetails(e) {
		// 'https://pokeapi.co/api/v2/pokemon/' + e.target.innerText.toLowerCase()
		fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.innerText.toLowerCase()}/`)
			.then(data => data.json())
			.then(data => {
				debugger
				this.setState({
					activeNow: {
						name: data.name,
						img: data.sprites.front_default,
						abilities: data.abilities,
						types: data.types
					}
				});
			});
	}

	render() {
		return (
			<div className="App" >
				{
					this.state.activeNow ?
						<div>
							<img src={this.state.activeNow.img} />
							<p>
								Here are the details information about {this.state.activeNow.name}:
								{this.state.activeNow.name} has {this.state.activeNow.abilities.length} abilities
								And it is of type {this.state.activeNow.types[0].type.name} pokemon
							</p>
						</div> :
						<div></div>
				}

				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={this.fetchData}>Fetch</button>
				{
					this.state.loaded ?
						this.state.pokemons.map((pokemon, index) => {
							return <div key={index} onClick={this.fetchDetails}>{pokemon}</div>
						}) :
						<div>Nothing loaded yet</div>
				}
			</div>
		);
	}


}

export default App;
