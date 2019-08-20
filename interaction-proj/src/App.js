import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './animate.css';
import Loading from './components/Loading'
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Card from './components/Card'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			spinLogo: true,
			cards: [
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
				{ id: 4 }
			]
		}

		this.toggleSpin = this.toggleSpin.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.setState({
			loading: false
		}), 3000);
	}

	toggleSpin(e) {
		this.setState(prevState => ({
			spinLogo: !prevState.spinLogo
		}));
	}

	render() {
		return (
			<Router>
				<Route>
					<div className="App">
						<header className="App-header">
							<img
								src={logo}
								className={this.state.spinLogo ? "Static-app-logo" : "Static-app-logo jello animated"}
								alt="logo"
								onMouseEnter={this.toggleSpin}
								onMouseLeave={this.toggleSpin} />
							<h1 className="App-title">Welcome to React</h1>
						</header>
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and save to reload.
						</p>
						{
							this.state.loading ?
								<Loading /> :
								<div className="grid">
									{
										this.state.cards.map(card => (
											<Card id={card.id} duration={150}></Card>
										))
									}
								</div>
						}

					</div>

				</Route>
			</Router>

		);
	}
}

export default App;
