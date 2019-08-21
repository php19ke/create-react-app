import React from 'react';
import logo from './logo.svg';
import './App.css';
import sayHello from './resources/utils';

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
			output: 'The output goes here'
		}

		this.addInput = this.addInput.bind(this);
	}

	addInput(e) {
		console.log(e);
	}

	render() {
		sayHello();
		return (
			<div className="App" >
				<button onClick={this.addInput}>0</button>
				<button onClick={this.addInput}>1</button>
				<button onClick={this.addInput}>2</button>
				<button onClick={this.addInput}>3</button>
				<button onClick={this.addInput}>4</button>
				<button onClick={this.addInput}>5</button>
				<button onClick={this.addInput}>6</button>
				<button onClick={this.addInput}>7</button>
				<button onClick={this.addInput}>8</button>
				<button onClick={this.addInput}>9</button>
				<button onClick={this.addInput}>+</button>
				<button onClick={this.addInput}>-</button>
				<button onClick={this.addInput}>*</button>
				<button onClick={this.addInput}>/</button>
				<button onClick={this.addInput}>=</button>
				<div id="result" style={style}>{this.state.output}</div>
			</div >
		);
	}

}

export default App;
