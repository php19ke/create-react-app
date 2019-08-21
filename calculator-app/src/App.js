import React from 'react';
import logo from './logo.svg';
import './App.css';
import sayHello from './resources/utils';
import Keys from './components/Keys'

const style = {
	margin: '20px',
	backgroundColor: '#ffff00'
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: null,
			triggerCalc: false,
			output: '',
			disableSymbol: false
		}

		this.addInput = this.addInput.bind(this);
		this.calculate = this.calculate.bind(this);
		this.reset = this.reset.bind(this);
	}

	addInput(e) {
		this.setState({
			disableSymbol: isNaN(e.target.innerText),
			output: this.state.output + e.target.innerText
		});
	}

	calculate() {
		this.setState({
			triggerCalc: true,
			output: eval(this.state.output)
		});
	}

	reset() {
		this.setState({
			triggerCalc: false,
			output: ''
		})
	}

	render() {
		return (
			<div className="App" >
				<Keys addInput={this.addInput} calculate={this.calculate} reset={this.reset} disableSymbol={this.state.disableSymbol} />

				<div id="result" style={style}>
					{
						this.state.output !== '' ?
							this.state.output :
							'The output goes here'
					}
				</div>
			</div >
		);
	}

}

export default App;
