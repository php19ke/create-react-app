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
			activeNow: null,
			cache: {}
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
		let pokeName = e.target.innerText.toLowerCase();

		if (this.state.cache.hasOwnProperty(pokeName)) {
			this.setState({
				activeNow: {
					name: pokeName,
					img: this.state.cache[pokeName].img,
					abilities: this.state.cache[pokeName].abilities,
					types: this.state.cache[pokeName].types
				}
			});
			return;
		}

		fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
			.then(data => data.json())
			.then(data => {
				this.state.cache[data.name] = {
					img: data.sprites.front_default,
					abilities: data.abilities,
					types: data.types
				};

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
							return <div className="pokemon" key={index} onClick={this.fetchDetails}>{pokemon}</div>
						}) :
						<div>Nothing loaded yet</div>
				}
			</div>
		);
	}


}

export default App;
